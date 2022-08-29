import React from 'react';
import moment from 'moment-timezone';
import Select from 'react-select';
import { Row, Col, Card } from 'react-bootstrap';
import { cities } from 'config/constants';
import { MdHome } from 'react-icons/md';
import './cityWeather.scss';
import Typography from 'components/Typography';
import { Weather, HourEntity } from 'types';
import { capitalize } from 'utils/helpers';
import loader from 'assets/img/loader.gif';
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
                    <div className='d-flex justify-content-center' style={{ height: '100%', width: '600px', maxWidth: '100%' }}>
                        <Select
                            className='weather__city-selector'
                            options={cities}
                            menuPlacement='auto'
                            menuPosition='fixed'
                            placeholder='Select City'
                            value={{ value: city, label: `📍${capitalize(city!)}` }}
                            onChange={routeChange}
                        />
                        <MdHome
                            className='weather__city-home ms-3'
                            color='white'
                            size={35}
                            onClick={() => routeChange(null)}
                        />
                    </div>
                    <Typography size={26} color='white'>
                        {moment().tz(cityTimezones.lookupViaCity(city)[0].timezone).format('MMM DD')}<br/>
                        {moment().tz(cityTimezones.lookupViaCity(city)[0].timezone).format('dddd, hh:mm A')}
                    </Typography>
                </div>
                <div>
                    {isLoading ? <img
                        src={loader}
                        height='140'
                        alt='loader-icon'
                        className='px-3'
                    /> : CityWeatherDetails(cityWeather, country!)}
                </div>
            </div>
        </div>
    );
}

const CityWeatherDetails = (
    cityWeather: Weather,
    country: string
) => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className='weather__details'>
            <Typography color='white' size={40}>
                {cityWeather.location.name}, {country.toUpperCase()}
            </Typography>
            <Typography size={20} color='gray'>
                {capitalize(cityWeather.current.condition.text)}. The high will be {cityWeather.forecast.forecastday![0].day.maxtemp_c}&deg;.
            </Typography>
            <Row>
                <Col md={12} lg={12} xl={4}>
                    <div className='d-flex align-items-center mt-5'>
                        <img
                            src={cityWeather.current.condition.icon}
                            width='120'
                            className='icon'
                            alt='current-icon'
                        />
                        <Typography
                            size={80}
                            weight='semi-bold'
                            color='white'
                            className=''
                        >
                            {cityWeather.current.temp_c}°ᶜ
                        </Typography>
                    </div>
                </Col>
                <Col className='weather__more-details' md={12} lg={12} xl={8}>
                    <Row>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    FEELS LIKE
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.feelslike_c}°ᶜ
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    MAX TEMPERATURE
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.forecast.forecastday![0].day.maxtemp_c}°ᶜ
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    MIN TEMPERATURE
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.forecast.forecastday![0].day.mintemp_c}°ᶜ
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    GUST
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.gust_kph} KPH
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    WIND
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.wind_kph} KPH
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    WIND DIRECTION
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.wind_dir}
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    VISIBILITY
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.vis_km} KM
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    HUMIDITY
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.humidity}
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    PRECIPITATION
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.current.precip_in} IN
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    CHANCE OF RAIN
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.forecast.forecastday![0].day.daily_chance_of_rain}%
                                </Typography>
                            </div>
                        </Col>
                        <Col className='p-3' sm={6} md={4} lg={3}>
                            <div>
                                <Typography size={16} weight='light' component='span' color='gray'>
                                    CHANCE OF SNOW
                                </Typography>
                                <Typography size={18} weight='medium'>
                                    {cityWeather.forecast.forecastday![0].day.daily_chance_of_snow}%
                                </Typography>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='weather__forecast-select'>
                <div className='btn-group' role='group'>
                    <button type='button' className={`btn btn-dark ${activeTab === 0 && 'active'}`} onClick={() => setActiveTab(0)}>Hourly</button>
                    <button type='button' className={`btn btn-dark ${activeTab === 1 && 'active'}`} onClick={() => setActiveTab(1)}>Daily</button>
                </div>
                <div className='weather-forecasts mt-3'>
                    {activeTab === 0 ?
                    HourlyWeatherForecast(cityWeather) :
                    DailyWeatherForecast(cityWeather)}
                </div>
            </div>
        </div>
    )
}

const HourlyWeatherForecast = (cityWeather: Weather) => {
    return (
        <div className='weather__forecast-hourly'>
            <Row className='d-flex'>
                {cityWeather.forecast.forecastday![0].hour!.map((hourlyData: HourEntity, idx: number) => {
                    return idx % 2 === 0 && <Col className='p-2' key={hourlyData.time_epoch}>
                        <Card className='mx-auto text-center'>
                            <Card.Body className='mx-auto text-center'>
                                <Typography size={16} weight='medium'>
                                    {moment(hourlyData.time).format('hh:mm A')}
                                </Typography>
                                <Card.Img src={hourlyData.condition.icon} className='py-3 mx-auto' />
                                <Card.Text>
                                    <Typography size={18} weight='medium'>
                                        {hourlyData.temp_c}°ᶜ
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

const DailyWeatherForecast = (cityWeather: Weather) => {
    const defaultDailyCount = 7;
    return (
        <div className='weather__forecast-daily'>
            <Row className='d-flex'>
                {[...Array(defaultDailyCount)].map((x, i) =>
                    <Col className='p-2' key={i}>
                        <Card className='mx-auto text-center'>
                            <Card.Body className='mx-auto text-center'>
                                    <Typography size={16} weight='medium'>
                                        {moment(cityWeather.forecast.forecastday![i].date).format('ddd, DD')}
                                    </Typography>
                                <Card.Img src={cityWeather.forecast.forecastday![i].day.condition.icon} className='py-3 mx-auto' />
                                <Card.Text>
                                    <Typography size={18} weight='medium'>
                                        {cityWeather.forecast.forecastday![i].day.avgtemp_c}°ᶜ
                                    </Typography>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    );
}