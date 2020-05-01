import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {ThemeProvider} from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createMenu = () => {
    const keys = props.items;
    return keys.map((key, index)=>{
      return <MenuItem key={key}>{key}</MenuItem>;
    });
  };

  return (
    <ThemeProvider theme={props.newTheme}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
        variant="contained" color="primary" size="large">{props.name}<ArrowDropDownIcon/></Button>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
        {createMenu()}
      </Menu>
    </ThemeProvider>
  );
}
