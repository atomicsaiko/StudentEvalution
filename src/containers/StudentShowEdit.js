import React, { PureComponent } from 'react'
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

  handleChange = (event, index, value) => this.setState({value});

  render() {
    var date = new Date();

    return (
      <div className="StudentShowEdit">
        <p>Show student detail page and form to enter evaluation</p>

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

export default StudentShowEdit
