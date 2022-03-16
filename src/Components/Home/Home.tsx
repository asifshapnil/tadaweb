import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Home.scss';

function HomeContent() {
    return (
        <div className='page'>
            <div className='hometitle'>
                Expence Manager Mneu
            </div>
            <div className='homecontent'>
                <div className='elements'>
                    <div className='menuBox add ripple'>
                        <AddIcon style={{ fontSize: 40, color: "#fff" }} />
                        <div>Add Expense</div>
                    </div>
                    <div className='menuBox calendar ripple'>
                        <CalendarMonthIcon style={{ fontSize: 40, color: "#fff" }} />
                        <div>Calendar View</div>
                    </div>
                    <div className='menuBox saving ripple'>
                        <AttachMoneyIcon style={{ fontSize: 40, color: "#fff" }} />
                        <div>Savings</div>
                    </div>
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