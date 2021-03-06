import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import getVote from '../actions/actions'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
      },
  table: {
    minWidth: 650,
    fontFamily: 'Montserrat',
  },
});

function createData(name, voteNum) {
  return { name, voteNum };
}

const rows = [
  createData('Childrens Garden', 159 /* {this.props.getVote} */),
  createData('Interurban Linear Garden', 237 /* {this.props.getVote} */),
  createData('Gallery Connections', 262 /* {this.props.getVote} */),
  createData('Woodland Walk', 305 /* {this.props.getVote} */),
];

export default function Votes() {
  const classes = useStyles();

  return (
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className={classes.root}>Our most anticipated projects</TableCell>
            <TableCell align="center" className={classes.root}>Number of Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.root}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.root}>{row.voteNum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button href="/">Go Back</Button>
    </div>
    
  );
}