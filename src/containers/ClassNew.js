import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import FlatButton from 'material-ui/FlatButton'
// import signUp from '../actions/user/sign-up'
import Title from '../components/ui/Title'
import DatePicker from 'material-ui/DatePicker';
import createClass from '../actions/classes/create'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginTop: '1rem',
  marginLeft: '2rem',
}

class ClassNew extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    createClass: PropTypes.func.isRequired,
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const batch = {
        // batchnumber: this.refs.batchnumber.getValue(),
        // startdate: this.state.startdate,
        // enddate: this.state.enddate

        name: this.refs.batchnumber.getValue(),
        start_date: this.state.startdate,
        end_date: this.state.enddate
      }
      this.props.createClass(batch)
    }
    console.log("Clicked button")
    return false
  }

  // PENDING: Date needs to be selected twice before input is recorded
  _handleStartInput(event, date) {
    this.setState({
      startdate: date
    })
  }

  // PENDING: Date needs to be selected twice before input is recorded
  _handleEndInput(event, date) {
    this.setState({
      enddate: date
    });
  }

  // signIn() {
  //   this.props.push('/sign-in')
  // }

  validateAll() {
    return this.validateBatchNumber()
  }

  // PENDING: Check input against the greatest batchnumber fetched from API
  validateBatchNumber() {
    const { batchnumber } = this.refs

    if (batchnumber.getValue().length > 0) {
      this.setState({
        batchnumberError: null
      })
      return true
    }

    this.setState({
      batchnumberError: 'Please provide a batch number'
    })
    return false
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Add a new batch" level={2} />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="batchnumber" type="text" hintText="Batch #number"
              onChange={this.validateBatchNumber.bind(this)}
              errorText={this.state.batchnumberError} />
          </div>
          <div className="input">
            <DatePicker
              ref="startdate"
              hintText="Start date"
              onChange={this._handleStartInput.bind(this)} />
          </div>
          <div className="input">
            <DatePicker
              ref="enddate"
              hintText="End date"
              onChange={this._handleEndInput.bind(this)} />
          </div>
        </form>

        {/* <FlatButton
          // onClick={ this.signIn.bind(this) }
          label="" /> */}
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Create batch"
          primary={true} />
      </Paper>
    )
  }
}

// export default ClassNew

export default connect(null, { createClass, push })(ClassNew)
