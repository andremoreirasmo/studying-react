import React from 'react'
import students from '../../data/students'

export default props => {
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        {students.map(student => {
          return <li key={student.id}>{student.id}) {student.name}: {student.score}</li>
        })}
      </ul>
    </div>
  )
}