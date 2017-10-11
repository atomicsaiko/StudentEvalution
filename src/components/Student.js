import React, { PureComponent } from 'react'

class Student extends PureComponent {
  showStudent() {
    // Push to history a new path leading to Student detail page component
  }

  render() {
    const style = {
      border: "1px solid black",
      width: "150px",
      textAlign: "center",
      margin: "8px"
    }

    const avatar = {
      width: "50px",
      height: "50px"
    }

    return (
      <div className="Student" style={style}>
        <p>{this.props.studentname}</p>
        <img src="https://cdn-img.easyicon.net/png/5488/548873.gif" alt="Avatar" style={avatar} />
        <p>{this.props.color_code}</p>
      </div>
    )
  }
}

export default Student;
