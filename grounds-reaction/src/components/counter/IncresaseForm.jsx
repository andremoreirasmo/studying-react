import React from 'react'

export default props => {
  return (
    <div>
      <label htmlFor="increaseInput">Incrementar: </label>
      <input id="increaseInput" type="number"
        value={props.increase}
        onChange={e => props.setIncrease(+e.target.value)} />
    </div>
  )
}