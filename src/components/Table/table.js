// table imported from material ui 

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../Table/table.css'

function createData(
  name: string,
  trackingId: number,
  date: string,
  status: string,

) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 159, "24 March,2022", "Approved"),
  createData('Ice cream sandwich', 237, "22 Apr,2022", "Not Approved"),
  createData('Eclair', 262, "2 Jan,2021", "Approved"),
  createData('Cupcake', 305, "2 Feb 2012", "Waiting"),
  createData('Gingerbread', 356, "2 July,2021", "Approved"),
];

export default function BasicTable() {
  return (
    <div className='table'>
          <h3>Recent Orders</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
