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

export interface Weather {
    location: Location;
    current: Current;
    forecast: Forecast;
    responseStatus: string;
    exception?: null;
}
export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: string;
    localtime: string;
}
export interface Current {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c?: null;
    windchill_f?: null;
    heatindex_c?: null;
    heatindex_f?: null;
    dewpoint_c?: null;
    dewpoint_f?: null;
    will_it_rain?: null;
    chance_of_rain?: null;
    will_it_snow?: null;
    chance_of_snow?: null;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
    air_quality?: null;
}
export interface Condition {
    text: string;
    icon: string;
    code: number;
}
export interface Forecast {
    forecastday?: (ForecastdayEntity)[] | null;
}
export interface ForecastdayEntity {
    date: string;
    date_epoch: number;
    astro: Astro;
    day: Day;
    hour?: (HourEntity)[] | null;
}
export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
}
export interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgis_km?: null;
    avgis_miles?: null;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: Condition;
    uv: number;
    air_quality?: null;
}
export interface HourEntity {
    last_updated?: null;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
    air_quality?: null;
    time_epoch: number;
    time: string;
}
  