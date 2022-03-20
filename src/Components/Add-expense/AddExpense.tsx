import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import { Form, Formik, Field } from 'formik';
import { TextField as TextFieldFormik } from 'formik-material-ui';
import { Typography, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { getExpenses, postExpense } from '../../Store/expenseSlice';


import './AddExpense.scss';

function AddExpenseContent() {

    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    }

    const [date, setdate] = useState(`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`);

    const handleDateChange = (event: any) => {
       const date = new Date(event).toLocaleDateString();
       setdate(date);
       console.log("🚀 ~ file: AddExpense.tsx ~ line 32 ~ handleDateChange ~ date", date)
    }
    
    const expenseStatus = useSelector((state: RootState) => state.expense.fetchstatus);
    let expenses: any[] = useSelector((state: RootState) => state.expense.expense);
    const dispatch = useDispatch();

    const onSubmit = (values: any) => {        
        let data: {};
        let expensecopy;
        data = {...values, date};
        if(!expenses) { expenses = []; }
        else { expensecopy = JSON.parse(JSON.stringify(expenses)); }
        expensecopy.push(data);
        localStorage.removeItem('expense');
        dispatch(postExpense(expensecopy));
        navigate('/expense-list');
    }

    useEffect(() => {
        if (expenseStatus === 'idle') {
            dispatch(getExpenses());
        }
    }, [expenseStatus, dispatch]);


    return (
        <div className='page'>
            <div className='addtitle' onClick={() => navigateBack()}>
                <ArrowBackIosIcon />
                Add Expense
            </div>
            <div className='addcontent'>
                <Formik
                    initialValues={{
                        date: '',
                        purpose: '',
                        remarks: '',
                    }}
                    onSubmit={(values) => onSubmit(values)}
                >
                    <Form autoComplete="off">
                        <div className='formwrapper'>
                            <div className='form'>
                                <div className='formflex'>
                                    <div>
                                        <Field
                                            name="purpose"
                                            component={TextFieldFormik}
                                            label="EXPENSE PURPOSE"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                                <div className='formflex'>
                                    <div >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/dd/yyyy"
                                                value={date}
                                                onChange={handleDateChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                    <div >
                                        <Field
                                            name="remarks"
                                            component={TextFieldFormik}
                                            label="ADD REMARK"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button
                                className='btn'
                                variant="contained"
                                type="submit"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    );
}

export const AddExpense = () => {
    return (
        <ContentWrapper>
            <AddExpenseContent />
        </ContentWrapper>
    );
}