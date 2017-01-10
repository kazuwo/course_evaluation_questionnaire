import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Card, CardText, CardTitle } from 'material-ui/Card'

import { fetchContents } from './actions'


const mapStateToProps = ({ oneone, onetwo, twoone, twotwo }) => ({
  oneone, onetwo, twoone, twotwo
})

const Result = ({ oneone, onetwo, twoone, twotwo }) => (
	<Card>
		<CardTitle title="授業評価アンケート" subtitle="全員終了" />
		<CardText>
			<p>これで授業評価アンケートを終了します。</p>
			<p>ご協力ありがとうございました。</p>
		</CardText>
  </Card>
)

export default connect(mapStateToProps)(Result)
