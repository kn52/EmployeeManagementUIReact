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

const useStyles = makeStyles({
  table: {
    Width: 400,
    height:10
  },
});

function createData(id, firstName, lastName, email) {
  return { id, firstName, lastName, email };
}

const rows = [ 
	createData('aa','aa','bb','cc'),
	createData('dd','dd','ee','ff'),
	createData('aa','aa','bb','cc'),
	createData('dd','dd','ee','ff'),
	createData('aa','aa','bb','cc'),
	createData('dd','dd','ee','ff'),
	createData('aa','aa','bb','cc'),
	createData('dd','dd','ee','ff')
];

export default function DisplayData (props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{fontFamily:"cambria"}}>ID</StyledTableCell>
            <StyledTableCell align="center" style={{fontFamily:"cambria"}}>FirstName</StyledTableCell>
			<StyledTableCell align="center" style={{fontFamily:"cambria"}}>LastName</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.firstName}</StyledTableCell>
			  <StyledTableCell align="center">{row.lastName}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">
			  <Button variant = "contained" color = "primary" className='font_family' onClick={()=>props.edit(row)}>
				<img src={Edit} alt="" className='image_icon'/></Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant = "contained" color = "primary" className='font_family' onClick={()=>{
				  if(window.confirm('Delete the record'))
			  {rows(row.id)}}}>
				<img src={Delete} alt="" className='image_icon'/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}