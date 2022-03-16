import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import { Form, Formik, Field } from 'formik';
import { TextField as TextFieldFormik } from 'formik-material-ui';
import { Typography, Button, MenuItem } from '@mui/material';
import './AddExpense.scss';

function AddExpenseContent() {
    const onSubmit = (values: any) => {

    }
    return (
        <div className='page'>
            <div className='addtitle'>
                Add Expense
            </div>
            <div className='addcontent'>
                <Formik
                    initialValues={{
                        expenseField: '',
                        date: '',
                        purpose: '',
                        remarks: '',
                        point: ''
                    }}
                    onSubmit={(values) => onSubmit(values)}
                >
                    <Form autoComplete="off">
                        <div className='formwrapper'>
                            <div className='form'>
                                <div className='formflex'>
                                    <div >
                                        <Field
                                            name="name"
                                            className="w-2/5"
                                            component={TextFieldFormik}
                                            label="COMPANY NAME"
                                            variant="filled"
                                        />
                                    </div>
                                    <div >
                                        <Field
                                            name="remarks"
                                            className="w-2/5"
                                            component={TextFieldFormik}
                                            label="COMPANY NAME"
                                            variant="filled"
                                        />
                                    </div>
                                </div>
                                <div className='formflex'>
                                    <div >
                                        <Field
                                            name="purpose"
                                            className="w-2/5"
                                            component={TextFieldFormik}
                                            label="COMPANY NAME"
                                            variant="filled"
                                        />
                                    </div>
                                    <div >
                                        <Field
                                            name="date"
                                            className="w-2/5"
                                            component={TextFieldFormik}
                                            label="COMPANY NAME"
                                            variant="filled"
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