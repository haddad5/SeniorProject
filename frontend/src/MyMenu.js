import React from 'react';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

export default class SimpleMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      choices: [],
    };
  }

  render() {
    const choices = this.state.choices;
    const onMenuChange = this.props.onMenuChange;
    const name = this.props.name;

    const handleChange = (event) => {
      const val = event.target.value;
      this.setState({choices: val});
      onMenuChange(name, val);
    };

    return (
      <FormControl style={{minWidth: 120, maxWidth: 300}}>
        <InputLabel>{this.props.name}</InputLabel>
        <Select
          multiple
          value={choices}
          onChange={handleChange}
          input={<Input/>}
          renderValue={ (selected) => (
            <div>
              {selected.map( (value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          {this.props.items.map( (item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
