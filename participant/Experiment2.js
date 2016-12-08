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
    this.state = {
      value: 0,
    }
  }

  render() {
    const { sequence, qswap, finEx2} = this.props
    let id = 0
    return(
      <div>
        <Card style={{padding: '5%'}}>
          {Subjects.map((sub, i) => {
            return(
              <Evaluation 
                id={i}
                finEx2={finEx2}
              />
            )
          })}
          <br />
          <RaisedButton
            label='next'
            primary='true'
            onClick={finEx2.bind(this, "finEx2")}
          />
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Experiment2)

