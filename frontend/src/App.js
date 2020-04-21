import React from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Search from '@material-ui/icons/Search';
import Table from "./MyTable.js";
import Menu from "./MyMenu.js";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles, fade } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import "./stylesheet.css";
import Grid from '@material-ui/core/grid';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";

const theme = createMuiTheme({
	  palette:{
		  default: {
			  main: '#6CA1AA'
		  },
		  primary: {
			  main: '#ffffff'
		  },
		  secondary: {
			  main: '#557F86'
		  },
	  },
	  
  });


export default class App extends React.Component {
	
	state = {
		loading: true,
		tableData: null
	}
	
	

	componentDidMount() {
		fetch('http://ec2-52-15-145-226.us-east-2.compute.amazonaws.com:8080/camping/api/trips')
			.then(response => response.json())
			.then(data => this.setState({tableData: data, loading: false}));
	}
	
	render() {
		return(
			<ThemeProvider className="root" theme={theme}>
				<Grid container>
					<Grid item xs={1} className="header">
						<img src="https://webstockreview.net/images/clipart-plane-pdf-13.png" width="96" height="80" />
					</Grid>
					<Grid item xs={3} className="header">
						<h1 id="title">Camping Advisor USA</h1>
					</Grid>
					<Grid item xs={8} className="header">
						<Grid container align="center" justify="center">
							<Grid item xs={4}>
								<Menu name="Difficulty" items={["1", "2", "3", "4", "5"]}/>
								<Menu name="State" items={["NH", "MA", "RI", "VT", "ME"]}/>
								<Menu name="Activities" items={["First year requirements", "Backwoods Engineering", "Hiking", "Dispersed Camping"]}/>
								<Button variant="contained" color="primary" size="large">APPLY</Button>
							</Grid>
							<Grid item xs={7}>
								<TextField label="Search" color="secondary" variant="outlined" style = {{width: "90%", background: "white"}}/>
							</Grid>
							<Grid item xs={1}>
								<Button variant="contained" color="primary"><Search/></Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={2} className="body">
						
					</Grid>
					<Grid item xs={10} className="body" style={{padding: 20}}>
						<p>The perfect site for all of your camping needs.</p>
						{this.state.loading || this.state.tableData == null ? (
							<p>loading...</p>
						) : (
							<Table data={this.state.tableData}/>
						)}
					</Grid>
				</Grid>
			</ThemeProvider>
		)
	}
}