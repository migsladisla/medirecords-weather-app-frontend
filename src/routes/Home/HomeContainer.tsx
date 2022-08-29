import React from 'react';
import HomeScreen from './HomeScreen';
import { fetchCityWeather } from 'api/weather';

export default function HomeContainer(): JSX.Element {
    const [isLoading, setIsLoading] = React.useState(true);
    const activeCity = "Sydney";

    React.useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
        try {
            // const cityWeather = await fetchCityWeather(activeCity);
            // console.log(cityWeather);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return <HomeScreen isLoading={isLoading} />;
}
