import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { nextQuestion } from './actions'
import Evaluation from './Evaluation'
import Subjects from 'components/Subjects'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
})

let evaluationData = new Array(Subjects.length)

class Experiment2 extends Component {
  constructor(props) {
    super(props)
    this.finishQuestion = this.finishQuestion.bind(this)
    this.collectConfirm  = this.collectConfirm.bind(this)
    this.state = {
      value: 0,
    }
  }

   finishQuestion() {
     const { finEx2 } = this.props
     finEx2(JSON.parse(JSON.stringify(evaluationData)))
  }

  collectConfirm(fromSub, arr){
    evaluationData[fromSub] = arr
  }

  render() {
    const { sequence, qswap } = this.props
    return(
      <div>
        <Card style={{padding: '5%'}}>
          <CardTitle title="授業評価アンケート" subtitle="5段階評価" />
          {Subjects.map((sub, i) => {
            return(
              <Evaluation 
                id={i}
                collectConfirm={this.collectConfirm}
              />
            )
          })}
          <br />
          <RaisedButton
            label='next'
            primary='true'
            onClick={this.finishQuestion}
          />
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Experiment2)

