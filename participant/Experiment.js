import React, { Component } from 'react'
import { connect } from 'react-redux'

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import SwipeableViews from 'react-swipeable-views'
import { Card, CardText } from 'material-ui/Card'

import { nextQuestion } from './actions'
import Subjects from 'components/Subjects'
import EvaluationAxis from 'components/EvaluationAxis'
import Experiment1 from './Experiment1'
import Experiment2 from './Experiment2'
import EndQuestion from './EndQuestion'

const mapStateToProps = ({ sequence, qswap }) => ({
  sequence, qswap 
})

class Experiment extends Component {
  constructor(props) {
    super(props)
    this.finEx1 = this.finEx1.bind(this)
    this.finEx2 = this.finEx2.bind(this)
    this.state = {
      slideIndex: 0
   }
  }

  finEx1(year, depa){
    const ex1Data = String(year)+depa
    console.log("year:" + year) 
    console.log("depa:" + depa) 
    console.log("year+depa:" + ex1Data) 
    const{ dispatch } = this.props
    dispatch(nextQuestion(ex1Data))
  }
  finEx2(evaluationData) {
    console.log("evaluationData:" + JSON.stringify(evaluationData))
    let arr = new Array()
    let counter = 0
    for(let i=0; i<Subjects.length; i++){
      for(let q=0; q<EvaluationAxis.length; q++){
        arr[counter] = evaluationData[q]
        counter++
      }
    }
    const{ dispatch } = this.props
    dispatch(nextQuestion(arr))
  }

  render() {
    const { sequence, qswap } = this.props
    return ((sequence == "question1")?
      <Experiment1 finEx1={this.finEx1}/>
      :(sequence == "question2")?
      <Experiment2 finEx2={this.finEx2}/> 
      :
      <EndQuestion />
    )
  }
}

export default connect(mapStateToProps)(Experiment)
