import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const RenderRow = (props) =>{
  console.log('keys', props.keys);
  return props.keys.map((key, index)=>{
    return <TableCell key={index}>{props.data[key]}</TableCell>;
  });
};


export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys() {
    const data = this.props.data;
    return Object.keys(data[0]);
  }

  getHeader() {
    const keys = this.getKeys();
    return keys.map((key, index)=>{
      return <TableCell key={index}>{key.toUpperCase()}</TableCell>;
    });
  }

  getRowsData() {
    const items = this.props.data;
    const keys = this.getKeys();
    return items.map((row, index)=>{
      console.log('row ', index, ' ', row);
      return <TableRow
        style ={index % 2? {background: '#649568'}:{background: '#9ccc9c'}}
        key={index}><RenderRow data={row} keys={keys}/></TableRow>;
    });
  }

  render() {
    console.log('Data inside of table ', this.props.data);
    if (this.props.data.length !== 0) {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{background: '#649568'}}>
                {this.getHeader()}
              </TableRow>
            </TableHead>
            <TableBody>{this.getRowsData()}</TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{background: '#649568'}}>
                <TableCell>None of the items matched your search.</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      );
    }
  }
}
