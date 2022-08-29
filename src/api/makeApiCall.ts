import axios from 'axios';
import { API_CONFIG } from '../config/constants';

export const api = axios.create({
    baseURL: API_CONFIG.API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 60000
});

/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the endpoint url
 * @param {String} method api methid POST | GET | DELETE | PUT
 * @param {Object|String} [data] - key:value pairs of the data to be sent to server
 * @param {String} contentType - header contentType of request
 * @returns {Promise}
 */
export default async function makeApiRequest(
        endpoint: string,
        method: string = 'GET',
        data?: any | undefined
) {
    const request: any = {
        method,
        url: endpoint,
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await api(request);

    if (response.status === 200) {
        return response.data;
    } else {
        const error: any = new Error(response.statusText);

        error.response = response;
        throw error;
    }
}
