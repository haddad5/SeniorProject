import React from 'react';
import TextField from '@material-ui/core/TextField';
import Table from './MyTable.js';
import Menu from './MyMenu.js';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './stylesheet.css';
import tree from './images/tree.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const header = {
  background: '#8DD1DD',
};

const title = {
  align: 'center',
};

const body = {
  background: '#A3663E',
  height: "100%",
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
  width: '94%',
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

const port = 8080;
const uri = '/camping/api/trips';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuChange = this.onMenuChange.bind(this);
    this.arrayContainsAllFrom = this.arrayContainsAllFrom.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.activityItems = this.activityItems.bind(this);
    this.stateItems = this.stateItems.bind(this);
    this.state = {
      loading: true,
      tableData: [],
      difficulty: [],
      state: [],
      activities: [],
      search: '',
    };
  }
  componentDidMount() {
    fetch(`http://${window.location.hostname}:${port}${uri}`)
      .then((response) => response.json())
      .then((data) => this.setState({tableData: data, loading: false}));
  }

  onMenuChange(menuName, newValue) {
    this.setState({[menuName.toLowerCase()]: newValue});
  }

  arrayContainsAllFrom(arr1, arr2) {
    for (var x = 0; x < arr1.length; x++) {
      if (!arr2.includes(arr1[x])) {
        return false;
      }
    }
    return true;
  }

  filterTrips() {
    const {tableData, difficulty, activities, state, search} = this.state;
    const filteredData = [];
    for (var i = 0; i < tableData.length; i++) {
      const tripActivities = tableData[i].activities.split(', ');
      if (
        (difficulty.includes('' + tableData[i].difficulty) ||
        difficulty.length === 0) &&
        (state.includes(tableData[i].state) ||
        state.length === 0) &&
        (this.arrayContainsAllFrom(activities, tripActivities) ||
        activities.length === 0) &&
        (search.length === 0 ||
        tableData[i].name.toLowerCase().includes(search.toLowerCase()) ||
        tableData[i].description.toLowerCase().includes(search.toLowerCase()) ||
        tableData[i].city.toLowerCase().includes(search.toLowerCase()) ||
        tableData[i].state.toLowerCase().includes(search.toLowerCase()) ||
        tableData[i].activities.toLowerCase().includes(search.toLowerCase())) 
      ) {
        filteredData.push(tableData[i]);
      }
    }
    if (difficulty.length === 0 &&
       state.length === 0 &&
       activities.length === 0 &&
       search.length === 0
    ) {
      return tableData;
    } else {
      return filteredData;
    }
  }
  
  handleSearchChange(event) {
    this.setState({search: event.target.value});
  }
  
  activityItems() {
    const trips = this.state.tableData;
    const activities = [];
    for(var i = 0; i < trips.length; i++) {
      const tripActivities = trips[i].activities.split(', ');
      for(var j = 0; j < tripActivities.length; j++) {
        if(!activities.includes(tripActivities[j])) {
          activities.push(tripActivities[j]);
        }
      }
    }
    return activities;
  }
  
  stateItems() {
    const trips = this.state.tableData;
    const states = [];
    for(var i = 0; i < trips.length; i++) {
      if(!states.includes(trips[i].state)) {
        states.push(trips[i].state);
      }
    }
    return states;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={1} style={header}>
            <img src={tree} alt='tree' style={image}/>
          </Grid>
          <Grid item xs={3} style={header}>
            <Typography variant="h4" style={title} >
              Camping Advisor USA Yeet
            </Typography>
            <Typography variant="body1">
              The perfect site for all of your camping needs.
            </Typography>
          </Grid>
          <Grid item xs={8} style={header}>
            <Grid container style={filter}>
              <Grid item xs={4}>
                <Menu name='Difficulty'
                  items={['1', '2', '3', '4', '5']}
                  onMenuChange={this.onMenuChange}
                />
                <Menu name='State'
                  items={this.stateItems().sort()}
                  onMenuChange={this.onMenuChange}
                />
                <Menu name='Activities' 
                  items={this.activityItems().sort()}
                  onMenuChange={this.onMenuChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField label='Search' color='secondary'
                  variant='outlined' style={searchbar}
                  onChange={this.handleSearchChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={body}>
            {this.state.loading || this.state.tableData == null ? (
              <CircularProgress color="primary" />
            ) : (
              <Table data={this.filterTrips()}
                columnOrder={[
                  'name',
                  'description',
                  'city',
                  'state',
                  'difficulty',
                  'activities'
                ]}
              />
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
