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
import Button from '@material-ui/core/Button';
import Edit from '../images/svg/Edit.svg';
import Delete from '../images/svg/Delete.svg';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
	  fontFamily: 'cambria',
    fontSize: 20,
    fontWeight: 'bold'
	},
  body: {
    fontSize: 18,
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

function createData(id, name, email) {
  return { id, name, email };
}

const rows = [ 
	createData('aa','bb','cc'),
		createData('dd','ee','ff')
];

const useStyles = makeStyles({
  table: {
    Width: 400,
    Height:100
  },
});



export default function DisplayData (props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontFamily:"cambria"}}>ID</StyledTableCell>
            <StyledTableCell align="left" style={{fontFamily:"cambria"}}>Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">
			  <Button variant = "contained" color = "primary" className='font_family' onClick={()=>props.edit(row)}>
				<img src={Edit} alt="" className='image_icon'/></Button></StyledTableCell>
              <StyledTableCell align="left"><Button variant = "contained" color = "primary" className='font_family' onClick={()=>props.del(row.id)}>
				<img src={Delete} alt="" className='image_icon'/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}