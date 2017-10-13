import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../actions/classes/fetch'
import fetchStudents from '../actions/students/fetch'
import fetchScores from '../actions/scores/fetch'
import Batch from '../components/Batch'
import Button from '../components/Button'
import RaisedButton from 'material-ui/RaisedButton'

class Classes extends PureComponent {
  componentWillMount() {
    const { fetchClasses, fetchStudents, fetchScores } = this.props
    fetchClasses()
    fetchStudents()
    fetchScores()

    this.setState({
      randomStudent: '',
    })
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

  askRandomStudent() {
    var arr = this.props.scores
    // console.log(this.props.scores.length)
    console.log("askRandomStudent():", arr[6]['student'])
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomStudent2() {
    var array = this.props.scores
    // debugger
    const QUESTION_COUNT = 100;
    const QUESTION_COUNT_RED = 0.5 * QUESTION_COUNT;
    const QUESTION_COUNT_YELLOW = 0.33 * QUESTION_COUNT;
    const QUESTION_COUNT_GREEN = 0.17 * QUESTION_COUNT;

    var studentRED = array.filter(student => student.color_code === 'RED'); // 6
    var studentYELLOW = array.filter(student => student.color_code === 'YELLOW'); // 2
    var studentGREEN = array.filter(student => student.color_code === 'GREEN'); // 2
    // debugger
    // var orderedStudents = [].concat(studentRED).concat(studentYELLOW).concat(studentGREEN);
    var randomStudents = [];

    for(var i = 0; i < QUESTION_COUNT_RED; i++) {
      let index = this.getRandomInt(0, studentRED.length-1);
      randomStudents.push(studentRED[index]);
    }

    for(var j = 0; j < QUESTION_COUNT_YELLOW; j++) {
      let index = this.getRandomInt(0, studentYELLOW.length-1);
      randomStudents.push(studentYELLOW[index]);
    }

    for(var k = 0; k < QUESTION_COUNT_GREEN; k++) {
      let index = this.getRandomInt(0, studentGREEN.length-1);
      randomStudents.push(studentGREEN[index]);
    }

    var randomStudent = randomStudents[this.getRandomInt(0, QUESTION_COUNT-1)]['student']

    console.log("Random student chosen: ", randomStudent)

    this.setState({
      randomStudent: randomStudent
    })

    return randomStudents[this.getRandomInt(0, QUESTION_COUNT-1)];
  }

  render() {
    // console.log("lala", this.props.students.length)
    return (
      <div className="Classes">
        <Batch batchnumber="10" students="10" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="11" students="12" startdate="01-01-2019" enddate="01-03-2019" />
        <Batch batchnumber="12" students="21" startdate="01-01-2019" enddate="01-03-2019" />
        <p>Below here testing map function</p>
        { this.props.classes.map(this.renderClass.bind(this))}
        <Button label="Create Batch" />
        <RaisedButton label="Ask a random Student" onClick={this.getRandomStudent2.bind(this)} secondary={true} />
        {/* <RaisedButton label="Ask a random Student" onClick={this.askRandomStudent.bind(this)} secondary={true} /> */}
        <p>Random student will be: {this.state.randomStudent}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ classes, students, scores }) => ({
  classes,
  students,
  scores
})

export default connect(mapStateToProps, {fetchClasses, fetchStudents, fetchScores})(Classes)
