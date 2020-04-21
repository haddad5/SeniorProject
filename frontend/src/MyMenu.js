import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const createMenu = () => {
		var keys = props.items;
		return keys.map((key, index)=>{
			return <MenuItem key={key}>{key}</MenuItem>
		})
	};

	return (
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{background: "white"}}>{props.name}</Button>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{createMenu()}
			</Menu>
		</div>
	);
}
