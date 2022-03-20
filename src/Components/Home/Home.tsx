import AddIcon from '@material-ui/icons/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link, useNavigate } from 'react-router-dom';

import './Home.scss';

function HomeContent() {
    const navigate = useNavigate();
    return (
        <div className='page'>
            <div className='hometitle'>
                Expense Manager Mneu
            </div>
            <div className='homecontent'>
                <div className='elements'>
                    <Link className="font-normal" to="/add-expense">
                        <div className='menuBox add ripple'>
                            <AddIcon style={{ fontSize: 40, color: "#fff" }} />
                            <div>Add Expense</div>
                        </div>
                    </Link>
                    <Link className="font-normal" to="/calendar">
                        <div className='menuBox calendar ripple'>
                            <CalendarMonthIcon style={{ fontSize: 40, color: "#fff" }} />
                            <div>Calendar View</div>
                        </div>
                    </Link>
                    <Link className="font-normal" to="/expense-list">
                        <div className='menuBox table ripple'>
                            <ViewListIcon style={{ fontSize: 40, color: "#fff" }} />
                            <div>Tabular View</div>
                        </div>
                    </Link>
                    <Link className="font-normal" to="/coming-soon">
                        <div className='menuBox saving ripple'>
                            <AttachMoneyIcon style={{ fontSize: 40, color: "#fff" }} />
                            <div>Savings</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export const Home = () => {
    return (
        <ContentWrapper>
            <HomeContent />
        </ContentWrapper>
    );
}