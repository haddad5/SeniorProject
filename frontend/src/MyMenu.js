import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import {ThemeProvider} from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
    const props = this.props;
    const choices = this.state.choices;
    
    const handleChange = (event) => {
        this.setState({choices: event.target.value,});
    };
    
    return (
      <FormControl style={{minWidth: 120, maxWidth: 300}}>
        <InputLabel>{props.name}</InputLabel>
          <Select
            multiple
            value={choices}
            onChange={handleChange}
            input={<Input/>}
            renderValue={selected => (
              <div>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {props.items.map(item => (
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
