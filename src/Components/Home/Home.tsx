import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import './Home.scss';

function HomeContent() {
    return (
        <div className='homecontent'>
            <div className='elements'>
                <div className='menuBox add ripple'>
                    <AddIcon style={{ fontSize: 40, color: "#fff"}} />
                    <div>Add Expense</div>
                </div>
                <div className='menuBox calendar ripple'>
                    <CalendarMonthIcon style={{ fontSize: 40, color: "#fff"}} />
                    <div>Calendar View</div>
                </div>
            </div>
        </div>
    );
}

export const Home = () => {
    return (
        <ContentWrapper>
            <HomeContent />
        </ContentWrapper>
    );
}