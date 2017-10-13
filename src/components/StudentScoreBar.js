import React, { PureComponent } from 'react'

class StudentScoreBar extends PureComponent {

  render() {
    const style = {
      clear: "both",
      content: "",
      display: "table",
    }

    const squaredefault = {
      background: "#fff",
      border: "1px solid #999",
      float: "left",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "34px",
      height: "34px",
      marginRight: "-1px",
      marginTop: "-1px",
      padding: "0",
      textAlign: "center",
      width: "34px",
    }

    const squarered = {
      background: "#fff",
      border: "1px solid #999",
      float: "left",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "34px",
      height: "34px",
      marginRight: "-1px",
      marginTop: "-1px",
      padding: "0",
      textAlign: "center",
      width: "34px",
      backgroundColor: "#ff6347",
    }

    const squareyellow = {
      background: "#fff",
      border: "1px solid #999",
      float: "left",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "34px",
      height: "34px",
      marginRight: "-1px",
      marginTop: "-1px",
      padding: "0",
      textAlign: "center",
      width: "34px",
      backgroundColor: "#fffacd",
    }

    const squaregreen = {
      background: "#fff",
      border: "1px solid #999",
      float: "left",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "34px",
      height: "34px",
      marginRight: "-1px",
      marginTop: "-1px",
      padding: "0",
      textAlign: "center",
      width: "34px",
      backgroundColor: "#9acd32",
    }

    return (
      <div className="StudentScoreBar" style={style}>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
        <button className="squaregreen" style={squaredefault}></button>
      </div>
    )
  }
}

export default StudentScoreBar;
