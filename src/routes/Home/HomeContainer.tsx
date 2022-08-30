import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import { fetchCityWeather } from 'api/weather';
import { Weather } from 'types';

export default function HomeContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const [cityWeathers, setCityWeathers] = React.useState<Weather[]>([]);
    const defaultCities = ['Sydney', 'Melbourne', 'Adelaide', 'Manila'];
    
    let navigate = useNavigate(); 
    const routeChange = (city: any) => { 
        console.log(city);
        let path = `${city.value.toLowerCase() !== 'manila' ? 'au' : 'ph'}/${city.value}/weather-forecast`; 
        navigate(path);
    };

    React.useEffect(() => {
        prepareData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
