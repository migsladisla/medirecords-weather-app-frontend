import Typography from 'components/Typography';
import Select from 'react-select';
import LazyLoad from 'react-lazyload';
import { Row, Col, Card } from 'react-bootstrap';
import { cities } from 'config/constants';
import { Weather } from 'types';
import './home.scss';
import { capitalize } from 'utils/helpers';
import loader from 'assets/img/loader.gif';

type Props = {
    isLoading: boolean,
    cityWeathers: Weather[],
    defaultCities: string[],
    routeChange: any
}

export default function HomeScreen({
    isLoading,
    cityWeathers,
    defaultCities,
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
                        {isLoading && LazyLoadDefaultCities(defaultCities)}
                        {cityWeathers.map((weather: Weather) => {
                            return <Col className='p-3' key={weather.location.name}>
                                <Card onClick={() => routeChange({ value: weather.location.name })}>
                                    <Card.Body>
                                        <Card.Title>{weather.location.name}, {weather.location.name.toLowerCase() !== 'manila' ? 'AU' : 'PH'}</Card.Title>
                                        <Card.Text>
                                            <Typography size={14} weight='light' component='span' color='gray'>
                                                {capitalize(weather.current.condition.text)}
                                            </Typography>
                                        </Card.Text>
                                        <Card.Text className='d-flex align-items-center'>
                                            <Card.Img src={weather.current.condition.icon} className='w-25' />
                                            <Typography size={36} weight='medium'>
                                                {weather.current.temp_c}°ᶜ
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

const LazyLoadDefaultCities = (defaultCities: string[]) => {
    return defaultCities.map((city: string) => {
        return <Col className='p-3' key={city}>
            <LazyLoad>
                <Card>
                    <img
                        src={loader}
                        height='auto'
                        alt='loader-icon'
                        className='px-3'
                    />
                </Card>
            </LazyLoad>
        </Col>;
    })
}
