import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import { Card, CardText } from 'material-ui/Card'

import { nextQuestion } from './actions'
import Subjects from 'components/Subjects'
import EvaluationAxis from 'components/EvaluationAxis'

const mapStateToProps = ({ sequence, qswap }) => ({
  sequence, qswap 
})

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  next(value) {
    const{ dispatch } = this.props
    dispatch(nextQuestion(value))
    this.setState({
      slideIndex: 1
    })
  }
  
  render() {
    const { sequence, qswap } = this.props
    return (sequence == "question1")?
      <Card><CardText>
          <p>{JSON.stringify(Subjects)}</p>
          <p>{JSON.stringify(EvaluationAxis)}</p>
          <p>{sequence}</p>
      </CardText></Card>
      : <Card><CardText><p>実験終了（ほかの人が終わるまでお待ちください）</p></CardText></Card>
  }
}

export default connect(mapStateToProps)(Experiment)
