import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <br></br>
        <Random min={10} max ={60}/>
        <Fragment></Fragment>
        <WithParameter
            title="Primeiro titulo"
            student="André Luis Moreira"
            score={7.2}
        />
        <First></First>
    </div>
)