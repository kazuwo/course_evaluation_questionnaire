import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider'
import Chip from 'material-ui/Chip'
import SwipeableViews from 'react-swipeable-views'

import { nextQuestion } from './actions'
import EvaluationAxis from 'components/EvaluationAxis'
import Subjects from 'components/Subjects'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
})

const sliderStyle = {
  margin: '5%',
}

const cardStyle = {
  marginBottom: '5%',
}

class Evaluation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      slideIndex: 0,
      isConfirm: false,
    }
  }

  handleChange1(event, value1){
    this.setState({ value1: value1 })
  }

  handleChange2(event, value2){
    this.setState({ value2: value2 })
  }

  handleChange3(event, value3){
    this.setState({ value3: value3 })
  }

  handleConfirm() {
    const { id, collectConfirm } = this.props
    collectConfirm(id, [this.state.value1, this.state.value2, this.state.value3])
    this.setState({ isConfirm: true })
  }

  handleNext() {
    this.setState({
      slideIndex: this.state.slideIndex + 1,
    })
  }

  handleBack() {
    this.setState({
      slideIndex: this.state.slideIndex - 1,
    })
  }

  render() {
    const { sequence, qswap, id} = this.props
    return(
      <div style={cardStyle}>
        <Card>
          <SwipeableViews
            index={this.state.slideIndex}
          >


          <div style={{overflow: 'hidden'}}>
            <p style={{ marginLeft: "2%"}}>1/{EvaluationAxis.length}</p>
            <p style={{ marginLeft: "2%"}}>{Subjects[id]}の{EvaluationAxis[0]}：{this.state.value1}</p>
            <Slider
              min={0}
              max={5}
              step={1}
              value={this.state.value1}
              onChange={this.handleChange1.bind(this)}
              style={sliderStyle}
            />
          </div>



          <div style={{overflow: 'hidden'}}>
            <p style={{ marginLeft: "2%"}}>1/{EvaluationAxis.length}</p>
            <p style={{ marginLeft: "2%"}}>{Subjects[id]}の{EvaluationAxis[1]}：{this.state.value2}</p>
            <Slider
              min={0}
              max={5}
              step={1}
              value={this.state.value2}
              onChange={this.handleChange2.bind(this)}
              style={sliderStyle}
            />
          </div>



          <div style={{overflow: 'hidden'}}>
            <p style={{ marginLeft: "2%"}}>1/{EvaluationAxis.length}</p>
            <p style={{ marginLeft: "2%"}}>{Subjects[id]}の{EvaluationAxis[2]}：{this.state.value3}</p>
            <Slider
              min={0}
              max={5}
              step={1}
              value={this.state.value3}
              onChange={this.handleChange3.bind(this)}
              style={sliderStyle}
            />
          </div>



          <div style={{ marginLeft: "2%"}}>
            <p><font color='#ff0000'>{Subjects[id]}</font>の5段階評価が終了しました。</p>
            <p>・評価を修正するなら右下の「戻る」ボタンをクリックしてください。</p>
            <p>・評価を確定するなら、下の<font color='#ff0000'>「確定」</font>ボタンをクリックしてください。</p>
            <RaisedButton
              label="確定"
              primary={true}
              onClick={this.handleConfirm.bind(this)}
              style={{ marginBottom: "2%"}}
            />
        </div>

      </SwipeableViews>
    </Card>

      <RaisedButton
        label="進む"
        style={{float: "right", marginRight:'5%'}}
        onClick={this.handleNext.bind(this)}
        primary={true}
        disabled={this.state.slideIndex == 3}
      />

      <RaisedButton
        label="戻る"
        style={{float: "right"}}
        onClick={this.handleBack.bind(this)}
        disabled={this.state.slideIndex == 0 || this.state.isConfirm}
      /><br />
  </div>

    )
  }
}

export default connect(mapStateToProps)(Evaluation)

