import { ContentWrapper } from '../../Layout/Content-wrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function ComingSoonContent() {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate('/');
    }

    return (
        <div className='page'>
            <div className='addtitle' onClick={() => navigateBack()}>
                <ArrowBackIosIcon />
                Savings
            </div>
            <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{width: '400px'}} src="https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8=" alt="" />
            </div>
        </div>
    );
}

export const ComingSoon = () => {
    return (
        <ContentWrapper>
            <ComingSoonContent />
        </ContentWrapper>
    );
}