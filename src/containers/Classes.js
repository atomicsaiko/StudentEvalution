import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../actions/classes/fetch'
import Batch from '../components/Batch'
import Button from '../components/Button'

class Classes extends PureComponent {
  componentWillMount() {
    fetchClasses()
  }

  render() {
    console.log("Props :", this.props)
    return (
      <div className="Classes">
        <p>Classes component</p>
      </div>
    )
  }
}

const mapStateToProps = ({ classes }) => ({
  classes
})

export default connect(mapStateToProps, {fetchClasses})(Classes)
