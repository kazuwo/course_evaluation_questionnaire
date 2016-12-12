import React, { Component } from 'react'
import { connect } from 'react-redux'
import throttle from 'react-throttle-render'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import Highcharts from 'react-highcharts'

import Teachers from 'components/Teachers'

const mapStateToProps = ({ question_text }) => ({ question_text })

const styles = {
  teacher: {
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '3%',
    marginLeft: '3%',
  },
  str: {
    marginTop: '3%',
    marginRight: '3%',
    margin: '3%',
  },
};



class Chart extends Component {
  constructor(props) {
    super(props)
    const { expanded } = this.props
    this.state = { expanded: expanded }
  }

  handleExpandChange(expanded) {
    this.setState({ expanded: expanded })
  }

  handleTouchTap(){
    console.log("chip click")
  }

  render() {
    const {joined, answered, page } = this.props
    return (
      <Card style={{padding:'3%'}}>
        <p style={styles.teacher}>集計結果をメールで送る</p>
        {Teachers.map((teacher, i) => {
          return(
            <div>
              <RaisedButton
                label={teacher}
                style={styles.teacher}
                primary='true'
              />
              <br />
            </div>
          )
        })}
        </Card>
      )
  }
}

export default connect(mapStateToProps)(throttle(Chart, 500))
