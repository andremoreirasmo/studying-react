import React, { useState } from 'react'
import './Input.css'

export default props => {
  const [value, setvalue] = useState('Inicial')

  return (
    <div className="Input">
      <h2>{value}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={value} onChange={e => setvalue(e.target.value)} />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  )
}