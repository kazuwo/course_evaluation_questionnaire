import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { nextQuestion } from './actions'
import Evaluation from './Evaluation'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
})

class Experiment2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  render() {
    const { sequence, qswap, finEx2} = this.props
    let id = 0
    return(
      <Evaluation 
        id={0}
        finEx2={finEx2}
      />
    )
  }
}

export default connect(mapStateToProps)(Experiment2)

