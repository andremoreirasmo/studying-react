import React from 'react'

export default function(props) {
    const status = props.score >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong>
                tem nota
                <strong> { props.score } </strong>
                e está 
                <strong> { status }</strong>!
            </p>
        </div>
    )
}