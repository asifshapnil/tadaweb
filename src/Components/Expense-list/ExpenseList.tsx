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
import ExpenseTable from './ExpenseTable';

function ExpenseListContent() {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    }

    return (
        <div className='page'>
            <div className='addtitle' onClick={() => navigateBack()}>
                <ArrowBackIosIcon />
                Expense List
            </div>
            <div className='table'>
                <ExpenseTable />
            </div>
        </div>
    );
}

export const ExpenseList = () => {
    return (
        <ContentWrapper>
            <ExpenseListContent />
        </ContentWrapper>
    );
}