import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import { Form, Formik, Field } from 'formik';
import { TextField as TextFieldFormik } from 'formik-material-ui';
import { Typography, Button, MenuItem } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { getExpenses, postExpense } from '../../Store/expenseSlice';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

function CalendarContent() {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    }

    const expenseStatus = useSelector((state: RootState) => state.expense.fetchstatus);
    const data = useSelector((state: RootState) => state.expense.data);
    let expenses: any[] = useSelector((state: RootState) => state.expense.expense);
    const [events, setevent] = useState([]);
    const dispatch = useDispatch();

    const handleDateClick = (e: any) => {
        console.log(e.dateStr);
    }

    useEffect(() => {
        if (expenseStatus === 'idle') {
            dispatch(getExpenses());
        }
    }, [expenseStatus, dispatch]);

    useEffect(() => {
        let eventcopy: any = JSON.parse(JSON.stringify(events));
        if (expenses && expenses.length) {
           for (const item of expenses) {
               const dateArray = item.date.split('/');
               console.log("🚀 ~ file: Calendar.tsx ~ line 48 ~ useEffect ~ dateArray", dateArray)
               const formattedDate = `${dateArray[2]}-0${dateArray[0]}-${dateArray[1]}`;
               console.log("🚀 ~ file: Calendar.tsx ~ line 50 ~ useEffect ~ formattedDate", formattedDate)
               eventcopy.push({
                   title: `($${item.amount}) ${item.purpose}`,
                   date: formattedDate
               })
           }
        }
        setevent(eventcopy);
    }, [expenses]);

    return (
        <div className='page'>
            <div className='addtitle' onClick={() => navigateBack()}>
                <ArrowBackIosIcon />
                Calendar View
            </div>
            <div className='table'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    eventColor="#EB5E55"
                    dateClick={handleDateClick}
                />
            </div>
        </div>
    );
}

export const Calendar = () => {
    return (
        <ContentWrapper>
            <CalendarContent />
        </ContentWrapper>
    );
}