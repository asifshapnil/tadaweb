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
import { Select, TextField as TextFieldFormik } from 'formik-material-ui';
import { Typography, Button, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { getExpenses, filterData, clearFilter } from '../../Store/expenseSlice';
import './ExpenseList.scss';
import { clear } from 'console';


export default function ExpenseTable() {

    const months = [
        {
            id: '1',
            name: 'January'
        },
        {
            id: '2',
            name: 'February'
        },
        {
            id: '3',
            name: 'March'
        },
        {
            id: '4',
            name: 'April'
        },
        {
            id: '5',
            name: 'May'
        },
        {
            id: '6',
            name: 'June'
        },
        {
            id: '7',
            name: 'July'
        },
        {
            id: '8',
            name: 'August'
        },
        {
            id: '9',
            name: 'September'
        },
        {
            id: '10',
            name: 'October'
        },
        {
            id: '11',
            name: 'Novermber'
        },
        {
            id: '12',
            name: 'Dicember'
        },

    ]


    const minOffset = 0;
    const maxOffset = 60;
    const years = [];

    const [selectedMonth, setSelectedMonth] = useState('None')
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    for (let i = minOffset; i <= maxOffset; i++) {
        const year = selectedYear - i;
        years.push({
            name: year
        });
    }

    const handleMonthChange = (evt: any) => {
        setSelectedMonth(evt.target.value);
    }
    const handleYearChange = (evt: any) => {
        setSelectedYear(evt.target.value);
    }

    const expenseStatus = useSelector((state: RootState) => state.expense.fetchstatus);
    const data = useSelector((state: RootState) => state.expense.data);
    const dispatch = useDispatch();

    const onApply = (values: any) => {
        let filteredArray: any[] = [];

        for (const expense of data as any) {
            console.log(expense);
            const dateArray = expense.date.split('/');
            const month = dateArray[0];
            const year = dateArray[2];
            if (selectedMonth && selectedYear) {
                console.log(typeof (month));
                console.log(typeof (year));
                console.log(typeof (selectedMonth));
                console.log(typeof (selectedYear));

                if (month.toString() === selectedMonth.toString() && year.toString() === selectedYear.toString()) {
                    filteredArray.push(expense);
                }
            }
        }

        dispatch(filterData(filteredArray));
    }

    const clearData = () => {
        dispatch(clearFilter());
    }


    useEffect(() => {
        if (expenseStatus === 'idle') {
            dispatch(getExpenses());
        }
    }, [expenseStatus, dispatch]);

    useEffect(() => {
        if (data && data.length) {
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
                            <div style={{ width: '100%' }}>
                                <Field
                                    name="month"
                                    variant="outlined"
                                    component={Select}
                                    onChange={handleMonthChange}
                                    label="SELECT MONTH"
                                >
                                    {months.map((month, index) => (
                                        <MenuItem key={index} value={month.id}>
                                            {month.name}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </div>
                            <div style={{ marginLeft: '1rem', width: '100%' }}>
                                <Field
                                    name="year"
                                    variant="outlined"
                                    component={Select}
                                    onChange={handleYearChange}
                                    label="SELECT YEAR"
                                >
                                    {years.map((year, index) => (
                                        <MenuItem key={index} value={year.name}>
                                            {year.name}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </div>
                            <Button
                                style={{ marginLeft: '1rem', width: '170px' }}
                                className='btn'
                                variant="contained"
                                type="submit"
                            >
                                Apply
                            </Button>
                            <Button
                                onClick={() => clearData()}
                                style={{ marginLeft: '1rem', width: '170px' }}
                                className='btn'
                                variant="contained"
                            >
                                Clear
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
            {
                data && data.length ?
                    <div>

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
                                    {data.map((row: any, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.purpose}</TableCell>
                                            <TableCell align="left">{row.remarks}</TableCell>
                                            <TableCell align="left">
                                                <div className='action'>
                                                    <Link className="font-normal" to={{ pathname: `/edit-expense/${row.id}` }}>
                                                        <Button
                                                            className='btn'
                                                            variant="contained"
                                                            type="submit"
                                                        >
                                                            Edit
                                                        </Button>
                                                    </Link>
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
                    :
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '6rem' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '30px' }}>NO DATA AVAILABLE</div>
                        <Link className="font-normal" to="/add-expense" style={{ marginTop: '1rem', backgroundColor: '#3f3fa0', borderRadius: '7px', color: '#fff', padding: '1rem 1rem' }}>
                            Add Expense
                        </Link>
                    </div>
            }

        </div>

    );
}
