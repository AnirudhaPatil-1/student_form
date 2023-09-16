import React from 'react';
import { useGlobalContext } from './context';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function BasicTable() {

    const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        mobileNo,
        address,
        course,
        city,
        state,
    } = useGlobalContext();

    const studentData = [
        { id: 1, field: 'First Name', value: firstName },
        { id: 2, field: 'Last Name', value: lastName },
        { id: 3, field: 'Email', value: email },
        { id: 4, field: 'Date of Birth', value: dateOfBirth },
        { id: 5, field: 'Gender', value: gender },
        { id: 6, field: 'Mobile Number', value: mobileNo },
        { id: 7, field: 'Address', value: address },
        { id: 8, field: 'Course', value: course },
        { id: 9, field: 'City', value: city },
        { id: 10, field: 'State', value: state },
    ]

    return (
        <TableContainer className='card-container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
          <TableRow>
            <TableCell >Field</TableCell>
            <TableCell >Details</TableCell>
          </TableRow>
        </TableHead>
                <TableBody>
                        {studentData.map((row)=>{
                            return (
                                <TableRow key = {row.field}>
                                    <TableCell>{row.field}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </TableContainer>
    )



}


export default BasicTable;
