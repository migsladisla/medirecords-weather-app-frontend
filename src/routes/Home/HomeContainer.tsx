import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { fetchCityWeather } from 'api/weather';
import { Weather } from 'types';

export default function HomeContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const [cityWeathers, setCityWeathers] = React.useState<Weather[]>([]);
    const defaultCities = ['Sydney', 'Melbourne', 'Adelaide', 'Manila'];
    const sampleData = [
        {
            "city": "Sydney",
            "timezone": 36000,
            "visibility": 10000,
            "coord": {
                "lon": 151.2073,
                "lat": -33.8679
            },
            "weather": [
                {
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "main": {
                "temp": 15,
                "feels_like": 15,
                "temp_min": 14,
                "temp_max": 16,
                "pressure": 1021,
                "humidity": 88
            },
            "wind": {
                "speed": 0,
                "deg": 4
            },
            "clouds": {
                "all": 100
            },
            "sys": {
                "country": "AU",
                "sunrise": 1661717898,
                "sunset": 1661758483
            },
            "responseStatus": "success",
            "exception": null
        },
        {
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
        },
        {
            "city": "Adelaide",
            "timezone": 34200,
            "visibility": 10000,
            "coord": {
                "lon": 138.6,
                "lat": -34.9333
            },
            "weather": [
                {
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "main": {
                "temp": 11,
                "feels_like": 10,
                "temp_min": 9,
                "temp_max": 11,
                "pressure": 1014,
                "humidity": 80
            },
            "wind": {
                "speed": 8,
                "deg": 250
            },
            "clouds": {
                "all": 75
            },
            "sys": {
                "country": "AU",
                "sunrise": 1661720981,
                "sunset": 1661761450
            },
            "responseStatus": "success",
            "exception": null
        },
        {
            "city": "Manila",
            "timezone": 28800,
            "visibility": 10000,
            "coord": {
                "lon": 120.9822,
                "lat": 14.6042
            },
            "weather": [
                {
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "main": {
                "temp": 31,
                "feels_like": 38,
                "temp_min": 31,
                "temp_max": 31,
                "pressure": 1006,
                "humidity": 76
            },
            "wind": {
                "speed": 4,
                "deg": 260
            },
            "clouds": {
                "all": 40
            },
            "sys": {
                "country": "PH",
                "sunrise": 1661723035,
                "sunset": 1661767852
            },
            "responseStatus": "success",
            "exception": null
        }
    ];

    let navigate = useNavigate(); 
    const routeChange = (city: any) => { 
        console.log(city);
        let path = `${city.value.toLowerCase() !== 'manila' ? 'au' : 'ph'}/${city.value}/weather-forecast`; 
        navigate(path);
    };

    React.useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            const collectedCities: Weather[] = [];
            for await (const city of defaultCities) {
                const cityWeather: Weather = await fetchCityWeather(city);
                collectedCities.push(cityWeather);
            }

            setCityWeathers(collectedCities);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return <HomeScreen
        isLoading={isLoading}
        defaultCities={defaultCities}
        cityWeathers={cityWeathers}
        routeChange={routeChange}
    />;
}
