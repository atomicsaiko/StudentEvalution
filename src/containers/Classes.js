import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../actions/classes/fetch'
import Batch from '../components/Batch'
import Button from '../components/Button'
import Student from '../components/Student' // remove after testing
import ScorePercentageBar from '../components/ScorePercentageBar'

class Classes extends PureComponent {
  componentWillMount() {
    fetchClasses()
  }

  render() {
    console.log("Props :", this.props)
    return (
      <div className="Classes">
        <Batch batchnumber="10" students="10" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="11" students="12" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="12" students="21" startdate="01-01-2019" enddate="01-03-2019" />
        <Button label="Create Batch" />
        <Student studentname="Jane Doe" color_code="RED" />
        <Student studentname="John Doe" color_code="YELLOW" />
        <Student studentname="Agent Doe" color_code="GREEN" />
        <ScorePercentageBar red="33" yellow="33" green="33" />

      </div>
    )
  }
}

const mapStateToProps = ({ classes }) => ({
  classes
})

export default connect(mapStateToProps, {fetchClasses})(Classes)
