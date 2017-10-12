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

const style = {
  margin: 12,
};

class StudentShowEdit extends PureComponent {
  state = {
    value: 1,
  };

  componentWillMount() {
    const { fetchStudent, fetchStudentScores } = this.props
    // fetchStudent()
    // fetchStudentScores()
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const studentevaluation = {
        name: this.refs.batchnumber.getValue(),
        start_date: this.state.startdate,
        end_date: this.state.enddate
      }
      const scoresevaluation = {

      }
      this.props.createStudentEvaluation(studentevaluation)
      this.props.createScoreEvaluation(scoresevaluation)
    }
    console.log("Clicked button")
    return false
  }

  _handleDateInput(event, date) {
    this.setState({
      date: date
    })
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    var date = new Date();

    return (
      <div className="StudentShowEdit">
        <p>Show student detail page and form to enter evaluation</p>
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
        <p>Jane Doe</p>
        <p>Batch #1</p>
        </ListItem>

        <div>
          <DatePicker
            hintText="Portrait Dialog"
            defaultDate={date}
            onChange={this._handleDateInput.bind(this)}
          />
        </div>

        <TextField
          hintText="Enter remark"
          floatingLabelText="Remark"
          multiLine={true}
          rows={6}
        /><br />

        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="RED" />
          <MenuItem value={2} primaryText="YELLOW" />
          <MenuItem value={3} primaryText="GREEN" />
        </SelectField>

        <RaisedButton label="Save" primary={true} style={style} />
        <RaisedButton label="Save and Next" secondary={true} style={style} />
      </div>
    )
  }
}

const mapStateToProps = ({ student, studentscores }) => ({
  student,
  studentscores
})

export default connect(mapStateToProps, {createStudentEvaluation, createScoreEvaluation, fetchStudent, fetchStudentScores})(StudentShowEdit)
