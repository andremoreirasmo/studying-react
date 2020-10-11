import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'
import Card from './components/layout/Card'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <br></br>

        <Card title="#04 - Desafio Aleatório" >
            <Random min={10} max={60} />
        </Card>

        <Card title="#03 - Fragmento">
            <Fragment></Fragment>
        </Card>

        <Card title="#02 - Com parâmetro">
            <WithParameter
                title="Primeiro titulo"
                student="André Luis Moreira"
                score={7.2}
            />
        </Card>

        <Card title="#01 - Primeiro componente">
            <First></First>
        </Card>
    </div>
)