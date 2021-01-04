import "./Counter.css"
import React, { Component } from 'react'

import Display from './Display'
import Buttons from './Buttons'
import IncresaseForm from './IncresaseForm'

class Contador extends Component {

  state = {
    number: this.props.initialNumber || 0,
    increase: this.props.initialincrease || 5
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.increase
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.increase
    })
  }

  setIncrease = (newIncrease) => {
    this.setState({
      increase: newIncrease
    })
  }

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <IncresaseForm increase={this.state.increase} setIncrease={this.setIncrease}/>
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    )
  }
}

export default Contador