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
        <Batch batchnumber="10" students="10" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="11" students="12" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="12" students="21" startdate="01-01-2019" enddate="01-03-2019" />
        <Button label="Create Batch" />
      </div>
    )
  }
}

const mapStateToProps = ({ classes }) => ({
  classes
})

export default connect(mapStateToProps, {fetchClasses})(Classes)
