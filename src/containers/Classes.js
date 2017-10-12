import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../actions/classes/fetch'
import fetchStudents from '../actions/students/fetch'
import Batch from '../components/Batch'
import Button from '../components/Button'

class Classes extends PureComponent {
  componentWillMount() {
    const { fetchClasses, fetchStudents } = this.props
    fetchClasses()
    fetchStudents()
  }

  /*
    Could move this functionality to the backend as an after-hook to perform
    the date formatting after retrieving the data. Function not yet working.
  */
  formatDate(date) {
    var datex = Date.parse(date);
    var day = datex.getDate();
    var month = datex.getMonth();
    var year = datex.getFullYear();

    return day + ' ' + month + ' ' + year;
  }

  renderClass(batch, index) {
    return (
      <Batch
        key={index}
        batchnumber={batch.name}
        startdate={batch.start_date}
        enddate={batch.end_date} />
    )
  }

  render() {
    console.log("lala", this.props.students.length)
    return (
      <div className="Classes">
        <Batch batchnumber="10" students="10" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="11" students="12" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="12" students="21" startdate="01-01-2019" enddate="01-03-2019" />
        <p>Below here testing map function</p>
        { this.props.classes.map(this.renderClass.bind(this))}
        <Button label="Create Batch" />
      </div>
    )
  }
}

const mapStateToProps = ({ classes, students }) => ({
  classes,
  students
})

export default connect(mapStateToProps, {fetchClasses, fetchStudents})(Classes)
