import React, { useState } from 'react';
import SonIndirect from './SonIndirect';

export default props => {
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [nerd, setNerd] = useState(false)

  function setInformations(pName, pAge, pNerd) {
    setName(pName)
    setAge(pAge)
    setNerd(pNerd)
  }

  return (
    <div>
      <div>
          <span>{name}</span>
          <span> <strong>{age}</strong></span>
          <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
      </div> 
      <SonIndirect onClick={setInformations}/>
    </div>
  )
}