import React from 'react'

export default props => {
    const { min, max } = props
    const randomValue = parseInt(Math.random() * (max - min)) + min;
    
    return (
        <div>
            <h2>Valor Aleátorio</h2>
            <p><strong>Valor Mínimo: </strong> {min}</p>
            <p><strong>Valor Máximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {randomValue}</p>
        </div>
    )
}