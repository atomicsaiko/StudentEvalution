import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Button extends PureComponent {
  render() {
    const style = {
      margin: 12,
    };

    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton label={this.props.label} primary={true} style={style} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Button
