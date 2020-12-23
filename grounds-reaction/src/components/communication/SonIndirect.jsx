import React from 'react';

export default props => {
  const minAge = 50
  const maxAge = 70
  const RandomAge = () => parseInt(Math.random() * (maxAge - minAge))
  return (
    <div>
      <div>Filho</div>
      <button onClick={() => props.onClick('João', RandomAge(), true)}>Fornecer Informações</button>
    </div>
  )
}