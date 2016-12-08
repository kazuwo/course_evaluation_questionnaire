import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { nextQuestion } from './actions'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
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

class Experiment1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      departmentValue: null,
      yearValue: null,
    }
    this.handleChangeYear = this.handleChangeYear.bind(this)
    this.handleChangeDepartment = this.handleChangeDepartment.bind(this)
  }

  handleChangeYear(event, yearValue){
    this.setState({yearValue})
  }
  handleChangeDepartment(event, departmentValue){
    this.setState({departmentValue})
  }

  render() {
    const { sequence, qswap, valueSelected, finEx1 } = this.props
    return (
      <Card>
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
              value="M"
              label="機械工学科"
              style={radioStyle}
            />
            <RadioButton
              value="E"
              label="電気電子工学科"
              style={radioStyle}
            />
            <RadioButton
              value="S"
              label="電子制御工学科"
              style={radioStyle}
            />
            <RadioButton
              value="I"
              label="情報工学科"
              style={radioStyle}
            />
            <RadioButton
              value="C"
              label="都市環境デザイン工学科"
              style={radioStyle}
            />
          </RadioButtonGroup>
        </Card>
        <RaisedButton 
          label="決定" 
          onClick={finEx1.bind(this, this.state.yearValue, this.state.departmentValue)} 
          primary='true' 
          style={buttonStyle}
        />
        </Card>

      )
  }
  propTypes: {
  valueSelected: React.PropTypes.string,
}
      }

      export default connect(mapStateToProps)(Experiment1)

