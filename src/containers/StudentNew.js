import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import FlatButton from 'material-ui/FlatButton'
// import signUp from '../actions/user/sign-up'
import createStudent from '../actions/students/create'
import Title from '../components/ui/Title'

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

class StudentNew extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const student = {
        name: this.refs.studentname.getValue(),
        picture: this.refs.profilepicture.getValue(),
        class: this.refs.batchnumber.getValue() // MongoDB uses ObjectId as reference, may need to look into this
      }
      this.props.createStudent(student) // Use router to redirect after successful student creation
    }
    return false
  }

  // signIn() {
  //   this.props.push('/sign-in')
  // }

  validateAll() {
    return this.validateName() && this.validatePicture()
  }

  validateName() {
    const { name } = this.refs

    // Cheat. Fix this later
    if (true) {
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

  validatePicture() {
    const { profilepicture } = this.refs

    // if (profilepicture.getValue().match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
    // I will look up the regex later. It should match http://host/URI.jpg or *.png *.gif
    if (true) {
      this.setState({
        pictureError: null
      })
      return true
    }

    if (profilepicture.value === '') {
      this.setState({
        pictureError: 'Please provide a URL to externally hosted picture'
      })
      return false
    }

    this.setState({
      pictureError: 'Please provide a valid picture'
    })
    return false
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Add a new student" level={2} />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="studentname" type="text" hintText="Your name"
              onChange={this.validateName.bind(this)}
              errorText={ this.state.nameError} />
          </div>
          <div className="input">
            <TextField ref="profilepicture" type="text" hintText="Provide URL to picture"
              onChange={this.validatePicture.bind(this)}
              errorText={ this.state.pictureError} />
          </div>
          {/* Validate against batchnumber from URL params and retrieve objectId ref in classes model, where field matches name: <batchnumber> */}
          <div className="input">
            <TextField ref="batchnumber" type="text" hintText="Provide batchnumber"
              onChange={this.validatePicture.bind(this)}
              errorText={ this.state.pictureError} />
          </div>
        </form>
        {/* <FlatButton
          // onClick={ this.signIn.bind(this) }
          label="" /> */}
        <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Create student"
          primary={true} />
      </Paper>
    )
  }
}

// export default StudentNew

export default connect(null, { createStudent, push })(StudentNew)
