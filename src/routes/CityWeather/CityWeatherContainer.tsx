import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCityWeather } from 'api/weather';
import CityWeatherScreen from './CityWeatherScreen';
import { Weather } from 'types';

export default function CityWeatherContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const [cityWeather, setCityWeather] = React.useState<Weather | null>(null);

    let navigate = useNavigate(); 
    let { city, country } = useParams();
    const routeChange = (city: any) =>{
        setIsLoading(true);

        let path = '/'; 
        if (city != null) {
            if (city.value.toLowerCase() === cityWeather!.location.name.toLowerCase()) {
                setIsLoading(false);
                return;
            }

            path = `/${city.value.toLowerCase() === 'manila' ? 'ph' : 'au'}/${city.value.toLowerCase()}/weather-forecast`;
        }
        
        navigate(path, { replace: true});
    };
    
    React.useEffect(() => {
        prepareData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    const prepareData = async () => {
        try {
            const result = await fetchCityWeather(city!);
            
            setCityWeather(result);
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
