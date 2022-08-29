import Card from 'components/Card';
import Select from 'react-select';
import { Row, Col } from 'react-bootstrap';
import { cities } from 'config/constants';
import './cityWeather.scss';

type Props = {
    isLoading: boolean,
    city: string | undefined,
    cityWeather: any,
    routeChange: any
}

export default function CityWeatherScreen({
    isLoading,
    city,
    cityWeather,
    routeChange
}: Props): JSX.Element {
    return (
        <div className='weather'>
            <div className='weather__wrapper'>
                <Select
                    options={cities}
                    value={{ value: city, label: city }}
                    onChange={routeChange}
                />
                <div>
                    {isLoading ? 'Loading...' : CityWeatherDetails(cityWeather)}
                </div>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const CityWeatherDetails = (details: any) => {
    return (
        <div className='weather__details'>
            {JSON.stringify(details)}
        </div>
    )
}
