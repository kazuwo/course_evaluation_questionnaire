import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CircularProgress from 'material-ui/CircularProgress'

import { nextQuestion } from './actions'

const mapStateToProps = ({ sequence, qswap, }) => ({
  sequence, qswap, 
})

class EndQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { sequence, qswap } = this.props
    return (
      <Card>
        <CardTitle title="授業評価アンケート" subtitle="アンケート終了" />
     	<CardText>
			<p>アンケートお疲れさまでした。</p>
      <p>全員が終了するまでしばらくお待ちください。</p>
		</CardText>
		<div style={{textAlign: "center"}}>
			<CircularProgress size={2}/>
		</div>
        </Card>

      )
  }
  propTypes: {
  valueSelected: React.PropTypes.string,
}
      }

      export default connect(mapStateToProps)(EndQuestion)

