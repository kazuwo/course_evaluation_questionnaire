import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { nextQuestion } from './actions'
import Evaluation from './Evaluation'
import Subjects from 'components/Subjects'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
})

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
  }

  collectConfirm(arr){
    console.log(arr)
  }

  render() {
    const { sequence, qswap } = this.props
    let id = 0
    return(
      <div>
        <Card style={{padding: '5%'}}>
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

