import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCityWeather } from 'api/weather';
import CityWeatherScreen from './CityWeatherScreen';

export default function CityWeatherContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const [cityWeather, setCityWeather] = React.useState({});

    let navigate = useNavigate(); 
    let { city } = useParams();
    const routeChange = (city: any) =>{ 
        setIsLoading(true);
        let path = `/au/${city.value.toLowerCase()}/weather-forecast`; 
        navigate(path, { replace: true});
    };

    React.useEffect(() => {
        prepareData();
    }, [city]);

    const prepareData = async () => {
        try {
            let result = null;
            if (city != null) {
                result = await fetchCityWeather(city);
            }
            
            setCityWeather(result);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return <CityWeatherScreen
        isLoading={isLoading}
        city={city}
        cityWeather={cityWeather}
        routeChange={routeChange}
    />;
}
