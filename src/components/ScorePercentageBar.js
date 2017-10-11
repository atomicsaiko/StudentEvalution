import React, { PureComponent } from 'react'

class ScorePercentageBar extends PureComponent {

  render() {
    const style = {
      clear: "both",
      content: "",
      display: "table",
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
      <div className="ScorePercentageBar" style={style}>
        <button className="squarered" style={squarered}>{ this.props.red }%</button>
        <button className="squareyellow" style={squareyellow}>{ this.props.yellow }%</button>
        <button className="squaregreen" style={squaregreen}>{ this.props.green }%</button>
      </div>
    )
  }
}

export default ScorePercentageBar;
