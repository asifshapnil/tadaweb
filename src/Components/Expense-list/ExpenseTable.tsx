import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import { Form, Formik, Field } from 'formik';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField as TextFieldFormik } from 'formik-material-ui';
import { Typography, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getExpenses } from '../../Store/expenseSlice';
import './ExpenseList.scss';


export default function ExpenseTable() {

    const onApply = (values: any) => {

    }

    const expenseStatus = useSelector((state: RootState) => state.expense.fetchstatus);
    const data = useSelector((state: RootState) => state.expense.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (expenseStatus === 'idle') {
            dispatch(getExpenses());
        }
    }, [expenseStatus, dispatch]);

    useEffect(() => {
        if (data.length) {
            console.log(data);
        }
    }, [data]);

    return (
        <div>
            <div className='filter'>
                <Formik
                    initialValues={{
                        month: '',
                        year: '',
                    }}
                    onSubmit={(values) => onApply(values)}
                >
                    <Form autoComplete="off">
                        <div className='formflex'>
                            <div>
                                <Field
                                    name="purpose"
                                    component={TextFieldFormik}
                                    label="EXPENSE PURPOSE"
                                    variant="outlined"
                                />
                            </div>
                            <div style={{ marginLeft: '1rem' }}>
                                <Field
                                    name="purpose"
                                    component={TextFieldFormik}
                                    label="EXPENSE PURPOSE"
                                    variant="outlined"
                                />
                            </div>
                            <Button
                                style={{ marginLeft: '1rem' }}
                                className='btn'
                                variant="contained"
                                type="submit"
                            >
                                Apply
                            </Button>
                            <Button
                                style={{ marginLeft: '1rem' }}
                                className='btn'
                                variant="contained"
                                type="submit"
                            >
                                Clear
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Expense Purp[ose</TableCell>
                            <TableCell align="left">Reamrks</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row: any) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.purpose}</TableCell>
                                <TableCell align="left">{row.remarks}</TableCell>
                                <TableCell align="left">
                                    <div className='action'>
                                        <Button
                                            className='btn'
                                            variant="contained"
                                            type="submit"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className='btn'
                                            variant="contained"
                                            type="submit"
                                            style={{ marginLeft: '1rem', backgroundColor: '#cd0f0f' }}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
