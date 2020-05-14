import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Table from './MyTable.js';
import Menu from './MyMenu.js';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/grid';
import './stylesheet.css';
import tree from './images/tree.png';

const header = {
  background: '#8DD1DD',
};

const title = {
  align: 'center',
};

const body = {
  background: '#A3663E',
  height: 480,
  padding: 20,
};

const image = {
  width: 96,
  height: 80,
};

const filter = {
  align: 'center',
  margin: '2%',
};

const searchbar = {
  width: '98%',
};

const theme = createMuiTheme({
  palette: {
    default: {
      main: '#6CA1AA',
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#557F86',
    },
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tableData: null,
      
    };
  }
  componentDidMount() {
    fetch('http://ec2-52-15-145-226.us-east-2.compute.amazonaws.com:8080/camping/api/trips')
        .then((response) => response.json())
        .then((data) => this.setState({tableData: data, loading: false}));
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={1} style={header}>
            <img src={tree} style={image}/>
          </Grid>
          <Grid item xs={3} style={header}>
            <h1 style={title}>Camping Advisor USA</h1>
          </Grid>
          <Grid item xs={8} style={header}>
            <Grid container style={filter}>
              <Grid item xs={5}>
                <Menu newTheme={theme} name='Difficulty' items={['1', '2', '3', '4', '5']}/>
                <Menu name='State' items={['NH', 'MA', 'RI', 'VT', 'ME']}/>
                <Menu name='Activities' items={['First year requirements', 'Backwoods Engineering', 'Hiking', 'Dispersed Camping']}/>
              </Grid>
              <Grid item xs={6}>
                <TextField label='Search' color='secondary' variant='outlined' style={searchbar}/>
              </Grid>
              <Grid item xs={1}>
                <Button variant='contained' color='primary'><Search/></Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} style={body}>
          </Grid>
          <Grid item xs={10} style={body}>
            <p>The perfect site for all of your camping needs.</p>
            {this.state.loading || this.state.tableData == null ? (
              <p>loading...</p>
            ) : (
              <Table data={this.state.tableData}/>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
