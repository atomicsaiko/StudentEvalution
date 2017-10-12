import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudentEvaluation from '../actions/students/createEvaluation'
import createScoreEvaluation from '../actions/scores/createEvaluation'
import fetchStudent from '../actions/students/fetchSingleStudent'
import fetchStudentScores from '../actions/scores/fetchStudentScores'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import DatePicker from 'material-ui/DatePicker';
import Title from '../components/ui/Title'
import Paper from 'material-ui/Paper';

const style = {
  margin: '12',
  position: 'relative',
  top: '-66px',
  left: '-100px',
};

const dialogStyle = {
  width: '600px',
  margin: '50px auto',
  padding: '2rem',
}

class StudentShowEdit extends PureComponent {
  state = {
    value: 1,
  };

  componentWillMount() {
    const { fetchStudent, fetchStudentScores } = this.props
    const { studentId } = this.props.match.params
    // fetchStudent(studentId)
    // fetchStudentScores(studentId)
  }

  colorCodeParse(value) {
    var colorCodeIndex = [null, 'RED', 'YELLOW', 'GREEN']

    return colorCodeIndex[value]
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const studentevaluation = {
        _id: this.props.student._id, // Verify!
        remark: this.refs.remark.getValue()
      }
      const scoresevaluation = {
        date: this.state.date,
        color_code: this.colorCodeParse(this.state.value)
      }
      this.props.createStudentEvaluation(studentevaluation) // Create or Patch at API
      this.props.createScoreEvaluation(scoresevaluation) // Create at API
    }
    console.log("Clicked button")
    return false
  }

  // PENDING: Date is not captured if the date selector hasn't been opened by user.
  // Even though default is prepopulated by current date.
  _handleDateInput(event, date) {
    this.setState({
      date: date
    })
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    var date = new Date();

    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <Paper style={ dialogStyle }>
          <Title content="Add Student evaluation" level={2} />
          {/* setup bar with color codes */}
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                src="https://cdn-img.easyicon.net/png/5488/548873.gif"
                size={50}
                style={style}
              />
            }
          >
          {/* Jane Doe */}
          {this.props.student.name}
          <p>Batch #1</p>
          {/* <p>Batch #{this.props.student.class.name}</p> */}
          </ListItem>

          <DatePicker
            hintText="Portrait Dialog"
            defaultDate={date}
            onChange={this._handleDateInput.bind(this)}
          />

          <TextField
            hintText="Enter remark"
            floatingLabelText="Remark"
            multiLine={true}
            rows={6}
            ref="remark"
          /><br />

          <SelectField
            floatingLabelText="Color Code"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="RED" />
            <MenuItem value={2} primaryText="YELLOW" />
            <MenuItem value={3} primaryText="GREEN" />
          </SelectField>
          <br /><br /><br /><br /><br /><br /><br /><br />
          <RaisedButton label="Save" primary={true} style={style} />
          <RaisedButton label="Save and Next" secondary={true} style={style} />
        </Paper>
      </form>
    )
  }
}

const mapStateToProps = ({ student, studentscores }) => ({
  student,
  studentscores
})

export default connect(mapStateToProps, {createStudentEvaluation, createScoreEvaluation, fetchStudent, fetchStudentScores})(StudentShowEdit)
