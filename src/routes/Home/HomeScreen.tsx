import { useNavigate } from 'react-router-dom';
import Card from 'components/Card';
import Typography from 'components/Typography';
import Select from 'react-select';
import { Row, Col } from 'react-bootstrap';
import { cities } from 'config/constants';
import './home.scss';

type Props = {
    isLoading: boolean
}

export default function HomeScreen({ isLoading }: Props): JSX.Element {
    let navigate = useNavigate(); 
    const routeChange = (city: any) =>{ 
      let path = `au/${city.value}/weather-forecast`; 
      navigate(path);
    };

    return (
        <div className='home'>
            <div className='home__wrapper'>
                <Typography
                    className='text-center mb-5'
                    color='white'
                    size={58}
                >
                    Discover the weather in your city.
                </Typography>
                <Select
                    options={cities}
                    className='w-75 mx-auto'
                    onChange={routeChange}
                />
                <Row>
                    <Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
