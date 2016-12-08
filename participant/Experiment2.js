import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider'
import Chip from 'material-ui/Chip'

import { nextQuestion } from './actions'

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

   handleChange(event, value){
    this.setState({ value: value })
  }

add(num){
    this.setState({
      value: this.state.value + num
    })
  }
  

  render() {
    const { sequence, qswap, finEx2} = this.props
    return(
      <Card>
        <div style={{
            display: "inline-block",
            padding: "0%",
            position: "relative",
            left: (this.state.value*100/5) + "%",
            transform: "translate(-50%, 0%)",
            width: "auto",
          }}>
           <Chip
            style={{
              display: "inline-block"
            }}
            onClick={this.add.bind(this, -1)}
          >{"<"}</Chip>
          <Chip
            style={{
              display: "inline-block"
            }}
            >{this.state.value}</Chip>
          <Chip
            style={{
              display: "inline-block"
            }}
            onClick={this.add.bind(this, 1)}
          >{">"}</Chip>
        </div>
        <Slider
          min={0}
          max={5}
          step={1}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <RaisedButton
          label='next'
          primary='true'
          onClick={finEx2.bind(this, "finEx2")}
        />
      </Card>
    )

  }
}

export default connect(mapStateToProps)(Experiment2)

