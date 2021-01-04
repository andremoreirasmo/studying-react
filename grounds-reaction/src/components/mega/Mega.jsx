import React, { useState } from 'react'

import './Mega.css'

export default props => {

  function generateNumbersNotContained(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(random) ? generateNumbersNotContained(min, max, array) : random
  }

  function generateNumbers(lenght) {
    const numbers = Array(lenght)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNumbersNotContained(1, 60, nums)
        return [...nums, newNumber]
      }, [])
      .sort((a, b) => a - b)

    return numbers
  }

  const [lenght, setLenght] = useState(props.lenght || 6)
  const [numbers, setNumbers] = useState(generateNumbers(lenght))


  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numbers.join(', ')}</h3>
      <div>
        <label htmlFor="">Qtde de números: </label>
        <input
          min="6"
          max="15"
          type="number"
          value={lenght}
          onChange={e => {
            setLenght(+e.target.value)
            setNumbers(generateNumbers(+e.target.value))
          }}
        />
      </div>
      <button onClick={() => setNumbers(generateNumbers(lenght))}>Gerar números</button>
    </div>
  )
}