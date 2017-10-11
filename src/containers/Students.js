import React, { PureComponent } from 'react'
import Student from '../components/Student' // remove after testing
import ScorePercentageBar from '../components/ScorePercentageBar'

class Students extends PureComponent {
  render() {
    return (
      <div className="Students">
        <p>Students overview page | Students React container</p>
        <ScorePercentageBar red="33" yellow="33" green="33" />
        <Student studentname="Jane Doe" color_code="RED" />
        <Student studentname="John Doe" color_code="YELLOW" />
        <Student studentname="Agent Doe" color_code="GREEN" />
    </div>
    )
  }
}

export default Students
