import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'

const tag = <strong>Olá React!!!</strong>
ReactDOM.render(
    <div id="app"> 
        { tag }
        <br></br>
        <First></First>
        <WithParameter 
            title="Primeiro titulo"
            student="André Luis Moreira"
            score={7.2}
        />
    </div>, 
    document.getElementById('root')
)