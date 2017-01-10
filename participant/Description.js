import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Card, CardText, CardTitle } from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'

const mapStateToProps = ({ question_text }) => ({
  question_text
})

const Description = ({ question_text }) => (
  <Card>
    <CardTitle title="授業評価アンケート" subtitle="ルールの説明" />
    <CardText>
      <p>それぞれの科目について、５段階で評価してください。</p>
  </CardText>
  </Card>
)
export default connect(mapStateToProps)(Description)
