import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCityWeather } from 'api/weather';
import CityWeatherScreen from './CityWeatherScreen';

export default function CityWeatherContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const [cityWeather, setCityWeather] = React.useState({});

    let navigate = useNavigate(); 
    let { city, country } = useParams();
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
            // let result = null;
            // if (city != null) {
            //     result = await fetchCityWeather(city);
            // }
            
            setCityWeather({
                "city": "Melbourne",
                "timezone": -14400,
                "visibility": 10000,
                "coord": {
                    "lon": -80.6081,
                    "lat": 28.0836
                },
                "weather": [
                    {
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "main": {
                    "temp": 24,
                    "feels_like": 25,
                    "temp_min": 22,
                    "temp_max": 26,
                    "pressure": 1013,
                    "humidity": 88
                },
                "wind": {
                    "speed": 2,
                    "deg": 170
                },
                "clouds": {
                    "all": 0
                },
                "sys": {
                    "country": "US",
                    "sunrise": 1661770782,
                    "sunset": 1661816847
                },
                "responseStatus": "success",
                "exception": null
            });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return <CityWeatherScreen
        isLoading={isLoading}
        city={city}
        country={country}
        cityWeather={cityWeather}
        routeChange={routeChange}
    />;
}
