import Typography from 'components/Typography';
import Select from 'react-select';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { cities } from 'config/constants';
import { Weather } from 'types';
import './home.scss';
import { capitalize } from 'utils/helpers';
import weatherIcon from 'assets/img/cloudy-day.png';

type Props = {
    isLoading: boolean,
    cityWeathers: any[],
    routeChange: any
}

export default function HomeScreen({
    isLoading,
    cityWeathers,
    routeChange
}: Props): JSX.Element {
    return (
        <div className='home'>
            <div className='home__wrapper'>
                <Typography
                    className='text-center mb-5 mx-auto title'
                    color='white'
                    size={58}
                >
                    Discover the weather in your city.
                </Typography>
                <Select
                    options={cities}
                    menuPlacement='auto'
                    menuPosition='fixed'
                    placeholder='📍Select City'
                    className='home__city-selector mx-auto'
                    onChange={routeChange}
                />
                <div className='home__top-cities'>
                    <Row>
                        {cityWeathers.map((weather: Weather) => {
                            return <Col className='p-3' key={weather.city}>
                                <Card onClick={() => routeChange({ value: weather.city })}>
                                    <Card.Body>
                                        <Card.Title>{weather.city}, {weather.city.toLowerCase() !== 'manila' ? 'AU' : 'PH'}</Card.Title>
                                        <Card.Text>
                                            {capitalize(weather.weather[0].description)}
                                        </Card.Text>
                                        <Card.Text className='d-flex align-items-center'>
                                            <Card.Img src={weatherIcon} className='w-25' />
                                            <Typography size={36} weight='medium'>
                                                {weather.main.temp}°ᶜ
                                            </Typography>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>;
                        })}
                    </Row>
                </div>
            </div>
        </div>
    );
}
