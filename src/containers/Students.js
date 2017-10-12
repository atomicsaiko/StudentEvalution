import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Student from '../components/Student'
import ScorePercentageBar from '../components/ScorePercentageBar'
import fetchStudents from '../actions/students/fetch'

class Students extends PureComponent {
  componentWillMount() {
    const { fetchStudents } = this.props
    fetchStudents()
  }

  renderStudent(student, index) {
    return (
      <Student
        key={index}
        studentname={student.name} />
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className="Students">
        <p>Students overview page | Students React container</p>
        <ScorePercentageBar red="33" yellow="33" green="33" />
        <Student studentname="Jane Doe" color_code="RED" />
        <Student studentname="John Doe" color_code="YELLOW" />
        <Student studentname="Agent Doe" color_code="GREEN" />
        <p>Below here mapping students</p>
        {this.props.students.map(this.renderStudent.bind(this))}
    </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({
  students
})

export default connect(mapStateToProps, {fetchStudents})(Students)
