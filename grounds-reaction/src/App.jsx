import './App.css'
import React from 'react'

import FatherIndirect from "./components/communication/FatherIndirect"
import FatherDirect from "./components/communication/FatherDirect"
import InfoUser from './components/conditional/InfoUser'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductTable from './components/repetition/ProductTable'
import StudentList from './components/repetition/StudentList'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
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
            <Card title="#10 - Comunicação indireta" color="#7B7554">
                <FatherIndirect />
            </Card>

            <Card title="#09 - Comunicação direta" color="#17183B">
                <FatherDirect />
            </Card>

            <Card title="#08 - Renderização Condicional" color="#83BCA9">
                <EvenOrOdd number={20} />
                <EvenOrOdd number={21} />
                <InfoUser user={{name: 'André'}} />
                <InfoUser user={{email: 'a@teste.com'}} />
            </Card>

            <Card title="#07 - Desafio Repetição" color="#9BC53D">
                <ProductTable />
            </Card>

            <Card title="#06 - Repetição" color="#5BC0EB">
                <StudentList />
            </Card>

            <Card title="#05 - Componentes com filho" color="#3D405B">
                <Family lastname="Ferreira">
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="ana" />
                    <FamilyMember name="Gustavo" />
                </Family>
            </Card>

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