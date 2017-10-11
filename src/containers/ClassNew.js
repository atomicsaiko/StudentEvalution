import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import signUp from '../actions/user/sign-up'
import Title from '../components/ui/Title'
import DatePicker from 'material-ui/DatePicker';

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
    signUp: PropTypes.func.isRequired,
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const batch = {
        batchnumber: this.refs.batchnumber.getValue(),
        startdate: this.refs.startdate.getValue(),
        enddate: this.refs.enddate.getValue()
      }
      this.props.signUp(batch)
    }
    return false
  }

  // signIn() {
  //   this.props.push('/sign-in')
  // }

  validateAll() {
    return this.validateName() &&
      this.validatePicture() // &&
      // this.validatePassword() &&
      // this.validatePasswordConfirmation()
  }

  validateName() {
    const { name } = this.refs

    if (name.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
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
              onChange={this.validateName.bind(this)}
              errorText={ this.state.nameError} />
          </div>
          <div className="input">
            <DatePicker ref="startdate" hintText="Start date" />
          </div>
          <div className="input">
            <DatePicker ref="enddate" hintText="End date" />
          </div>
        </form>
        <FlatButton
          // onClick={ this.signIn.bind(this) }
          label="" />
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Create class"
          primary={true} />
      </Paper>
    )
  }
}

export default ClassNew
