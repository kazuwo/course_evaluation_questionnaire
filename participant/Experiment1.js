import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import { nextQuestion } from './actions'

const mapStateToProps = ({ sequence, qswap }) => ({
  sequence, qswap 
})

const radioStyle = {
  marginBottom: 16,
  width: 300,
}

const cardStyle = {
  margin: '5%',
  marginBottom: '5%',
}

const buttonStyle = {
  marginBottom: '5%',
  marginLeft: '5%',
}

let ddt = [1,2]
let year = 0
let depa = ""

class Experiment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentValue: null,
      yearValue: null,
    }
    this.handleChangeYear = this.handleChangeYear.bind(this)
    this.handleChangeDepartment = this.handleChangeDepartment.bind(this)
    this.handleClick= this.handleClick.bind(this)
  }

  next(value) {
    const{ dispatch } = this.props
    dispatch(nextQuestion(value))
    this.setState({
      slideIndex: 1
    })
  }

  handleChangeYear(event, yearValue){
    this.setState({yearValue})
  }
  handleChangeDepartment(event, departmentValue){
    this.setState({departmentValue})
  }
  handleClick(){
    year = this.state.yearValue
    depa = this.state.departmentValue
    this.setState({ddt})
  }

  render() {
    const { sequence, qswap, valueSelected } = this.props
    return (
      <Card>
        <p>departmentValue:{depa}</p>
        <p>yearValue:{year}</p>
      <Card style={cardStyle}>
        <RadioButtonGroup style={radioStyle} name="year" onChange={this.handleChangeYear}>
          <RadioButton
            value={1}
            label="1年生"
            style={radioStyle}
          />
          <RadioButton
            value={2}
            label="2年生"
            style={radioStyle}
          />
          <RadioButton
            value={3}
            label="3年生"
            style={radioStyle}
          />
          <RadioButton
            value={4}
            label="4年生"
            style={radioStyle}
          />
          <RadioButton
            value={5}
            label="5年生"
            style={radioStyle}
          />
        </RadioButtonGroup>
      </Card>


        <Card style={cardStyle}>
          <RadioButtonGroup style={radioStyle} name="department" onChange={this.handleChangeDepartment}> 
            <RadioButton
              value="machine"
              label="機械工学科"
              style={radioStyle}
            />
            <RadioButton
              value="electric"
              label="電気電子工学科"
              style={radioStyle}
            />
            <RadioButton
              value="control"
              label="電子制御工学科"
              style={radioStyle}
            />
            <RadioButton
              value="information"
              label="情報工学科"
              style={radioStyle}
            />
            <RadioButton
              value="city"
              label="都市環境デザイン工学科"
              style={radioStyle}
            />
          </RadioButtonGroup>
        </Card>
        <RaisedButton label="決定" onClick={this.handleClick} primary='true' style={buttonStyle}/>
        </Card>

      )
  }
  propTypes: {
  valueSelected: React.PropTypes.string,
}
      }

      export default connect(mapStateToProps)(Experiment1)

