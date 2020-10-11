import './App.css'
import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'
import Card from './components/layout/Card'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <br></br>

        <div className="Cards">
            <Card title="#04 - Desafio Aleatório" color="#FA6900">
                <Random min={10} max={60} />
            </Card>

            <Card title="#03 - Fragmento" color="#E94C6F">
                <Fragment></Fragment>
            </Card>

            <Card title="#02 - Com parâmetro" color="#1FDA9A">
                <WithParameter
                    title="Primeiro titulo"
                    student="André Luis Moreira"
                    score={7.2}
                />
            </Card>

            <Card title="#01 - Primeiro componente" color="#D0C91F">
                <First></First>
            </Card>
        </div>
    </div>
)