import React, { PureComponent } from 'react'

class Batch extends PureComponent {
  render() {
    const style = {
      border: "1px solid black",
      width: "150px",
      textAlign: "center",
      margin: "8px"
    }

    const date = {
      fontSize: "0.7em"
    }

    return (
      <div className="Batch" style={style}>
        <p>Batch #{this.props.batchnumber}</p>
        <p>{this.props.students} students</p>
        <p className="Date" style={date}>{this.props.startdate} - {this.props.enddate}</p>
      </div>
    )
  }
}

export default Batch;
