import React from 'react';
import moment from 'moment-timezone';
import Select from 'react-select';
import { Row, Col, Card } from 'react-bootstrap';
import { cities } from 'config/constants';
import './cityWeather.scss';
import Typography from 'components/Typography';
import { Weather } from 'types';
import { capitalize } from 'utils/helpers';
import sunIcon from 'assets/img/big-sun.png';
import { MdRowing } from 'react-icons/md';
const cityTimezones = require('city-timezones');

type Props = {
    isLoading: boolean,
    city: string | undefined,
    country: string | undefined,
    cityWeather: any,
    routeChange: any
}

export default function CityWeatherScreen({
    isLoading,
    city,
    country,
    cityWeather,
    routeChange
}: Props): JSX.Element {
    return (
        <div className='weather'>
            <div className='weather__wrapper'>
                <div className='d-flex justify-content-between headers'>
                    <Select
                        className='weather__city-selector'
                        options={cities}
                        menuPlacement='auto'
                        menuPosition='fixed'
                        placeholder='Select City'
                        value={{ value: city, label: capitalize(city!) }}
                        onChange={routeChange}
                    />
                    <Typography size={26} color='white'>
                        {moment().tz(cityTimezones.lookupViaCity(city)[0].timezone).format('dddd, hh:mm A')}
                    </Typography>
                </div>
                <div>
                    {isLoading ? 'Loading...' : CityWeatherDetails(cityWeather, country!)}
                </div>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const CityWeatherDetails = (
    details: Weather,
    country: string
) => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className='weather__details'>
            <Typography color='white' size={40}>
                {details.city}, {country.toUpperCase()}
            </Typography>
            <Typography size={20} color='gray'>
                {capitalize(details.weather[0].description)}. Lorem ipsum donor ewan ko.
            </Typography>
            <div className='d-flex align-items-center mt-5'>
                <img
                    src={sunIcon}
                    width='120'
                    className='icon'
                    alt='sun-icon'
                />
                <Typography
                    size={80}
                    weight='semi-bold'
                    color='white'
                    className=''
                >
                    {details.main.temp}°ᶜ
                </Typography>
            </div>
            <div className='weather__forecast-select'>
                <div className='btn-group' role='group'>
                    <button type='button' className={`btn btn-dark ${activeTab === 0 && 'active'}`} onClick={() => setActiveTab(0)}>Hourly</button>
                    <button type='button' className={`btn btn-dark ${activeTab === 1 && 'active'}`} onClick={() => setActiveTab(1)}>Daily</button>
                </div>
                <div className='weather-forecasts mt-3'>
                    {activeTab === 0 ? HourlyWeatherForecast() : DailyWeatherForecast()}
                </div>
            </div>
        </div>
    )
}

const HourlyWeatherForecast = () => {
    const cityWeathers = [1, 2, 3, 4,5,6,7,8,9,10,11,12];
    return (
        <div className='weather__forecast-hourly'>
            <Row className='d-flex'>
                {cityWeathers.map((weather: number) => {
                    return <Col className='p-2' key={weather}>
                        <Card className='mx-auto text-center'>
                            <Card.Body className='mx-auto text-center'>
                                <Typography size={16} weight='medium'>
                                    6:00 am
                                </Typography>
                                <Card.Img src={sunIcon} className='w-50 py-3 mx-auto' />
                                <Card.Text>
                                    <Typography size={18} weight='medium'>
                                        {24}°ᶜ
                                    </Typography>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>;
                })}
            </Row>
        </div>
    );
}

const DailyWeatherForecast = () => {
    const cityWeathers = [1, 2, 3, 4,5,6,7];
    return (
        <div className='weather__forecast-daily'>
            <Row className='d-flex'>
                {cityWeathers.map((weather: number) => {
                    return <Col className='p-2' key={weather}>
                        <Card className='mx-auto text-center'>
                            <Card.Body className='mx-auto text-center'>
                                    <Typography size={16} weight='medium'>
                                        Today
                                    </Typography>
                                <Card.Img src={sunIcon} className='w-50 py-3 mx-auto' />
                                <Card.Text>
                                    <Typography size={18} weight='medium'>
                                        {24}°ᶜ
                                    </Typography>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>;
                })}
            </Row>
        </div>
    );
}
