// Typography
export type TypographySize = 80 | 58 | 40 | 36 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 13 | 12 | 11 | 10;
export type Color = 'base' | 'bluish-gray' | 'light-gray' | 'bluish-light' | 'gray' | 'white' | 'red' | 'primary' | 'secondary' | 'success' | 'dark' | 'warning' | 'danger' | 'light' | 'dark-moderate-blue' | 'brand-blue' | 'dark-gray' | 'brand-dark-gray';
export type Weight = 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
export type FileType = '.csv' | '.xls' | '.xlsx';

// Button
export type ButtonSize = 'sm' | 'md' | 'lg';

// Typography Icon
export type TypographyIconSize = 'sm' | 'md' | 'lg' | undefined;

// Button
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link' |
    'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-danger' | 'outline-light' | 'outline-dark';

// Button
export type StatusVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'regular-blue' | 'warning';

// ModalContainer
export type ModalSize = 'sm' | 'lg' | 'xl' | undefined;

export type Weather = {
    city: string;
    timezone: number;
    visibility: number;
    coord: {
        lon: number;
        lat: number;
    },
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ],
    main: {
        temp: string;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    },
    wind: {
        speed: number;
        deg: number;
    },
    clouds: {
        all: number;
    },
    sys: {
        type: number;
        country: string;
        sunrise: number;
        sunset: number;
    },
    name: string;
    responseStatus: string | undefined | null;
    exception: string | undefined | null;
}