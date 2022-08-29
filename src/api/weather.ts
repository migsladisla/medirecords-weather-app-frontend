import makeApiRequest from './makeApiCall';
import { API_CONFIG } from '../config/constants';

const { 
    WEATHER_SERVICE,
    API_VERSION,
    API_KEY
} = API_CONFIG;

export async function fetchCityWeather(city: string): Promise<any> {
    return await makeApiRequest(`${WEATHER_SERVICE}/api/v${API_VERSION}/weather/city/${city}?apiKey=${API_KEY}`);
}
