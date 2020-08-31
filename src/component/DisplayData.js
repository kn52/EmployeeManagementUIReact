import React from 'react';
import '../css/Employee.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DisplayButton from '../utility/DisplayButton';
import Edit from '../images/svg/Edit.svg';
import Delete from '../images/svg/Delete.svg';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
	fontFamily: 'cambria',
	fontSize: 22,
	fontWeight: 'bold'
  },
  body: {
    fontSize: 16,
	fontFamily: 'Cambria',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(firstname, lastname, email) {
  return { firstname, lastname, email };
}

const rows = [
  createData('James', 'Warner', 'james.warner@gmail.com'),
  createData('Stephen', 'Hawking', 'stephen@gmail.co.in'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontFamily:"cambria"}}>First Name</StyledTableCell>
            <StyledTableCell align="left" style={{fontFamily:"cambria"}}>Last Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.firstname}
              </StyledTableCell>
              <StyledTableCell align="left">{row.lastname}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left"><DisplayButton imag={Edit} imageclass='image_icon'  buttonclass='font_family' txt='' /></StyledTableCell>
              <StyledTableCell align="left"><DisplayButton imag={Delete} imageclass='image_icon'  buttonclass='font_family' txt='' /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}