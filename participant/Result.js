import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContents } from './actions'


const mapStateToProps = ({ oneone, onetwo, twoone, twotwo }) => ({
  oneone, onetwo, twoone, twotwo
})

const Result = ({ oneone, onetwo, twoone, twotwo }) => (
  <div>
    <p>./participants/Result.js</p>
  </div>
)

export default connect(mapStateToProps)(Result)
