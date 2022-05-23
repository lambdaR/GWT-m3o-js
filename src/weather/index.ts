import * as m3o from "@m3o/m3o-node";

export class WeatherService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the weather forecast for the next 1-10 days
  forecast(request: ForecastRequest): Promise<ForecastResponse> {
    return this.client.call(
      "weather",
      "Forecast",
      request
    ) as Promise<ForecastResponse>;
  }
  // Get the current weather report for a location by postcode, city, zip code, ip address
  now(request: NowRequest): Promise<NowResponse> {
    return this.client.call("weather", "Now", request) as Promise<NowResponse>;
  }
}

export interface Forecast {
  // max temp in celsius
  max_temp_c?: number;
  // the average temp in fahrenheit
  avg_temp_f?: number;
  // date of the forecast
  date?: string;
  // the URL of forecast condition icon. Simply prefix with either http or https to use it
  icon_url?: string;
  // max wind speed kph
  max_wind_kph?: number;
  // minimum temp in fahrenheit
  min_temp_f?: number;
  // chance of rain (percentage)
  chance_of_rain?: number;
  // max temp in fahrenheit
  max_temp_f?: number;
  // minimum temp in celsius
  min_temp_c?: number;
  // time of sunset
  sunset?: string;
  // the average temp in celsius
  avg_temp_c?: number;
  // max wind speed mph
  max_wind_mph?: number;
  // time of sunrise
  sunrise?: string;
  // will it rain
  will_it_rain?: boolean;
  // forecast condition
  condition?: string;
}

export interface ForecastRequest {
  // number of days. default 1, max 10
  days?: number;
  // location of the forecase
  location?: string;
}

export interface ForecastResponse {
  // timezone of the location
  timezone?: string;
  // country of the request
  country?: string;
  // forecast for the next number of days
  forecast?: Forecast[];
  // e.g 37.55
  latitude?: number;
  // the local time
  local_time?: string;
  // location of the request
  location?: string;
  // e.g -77.46
  longitude?: number;
  // region related to the location
  region?: string;
}

export interface NowRequest {
  // location to get weather e.g postcode, city
  location?: string;
}

export interface NowResponse {
  // e.g 37.55
  latitude?: number;
  // location of the request
  location?: string;
  // temperature in celsius
  temp_c?: number;
  // wind degree
  wind_degree?: number;
  // wind direction
  wind_direction?: string;
  // the weather condition
  condition?: string;
  // whether its daytime
  daytime?: boolean;
  // the humidity percentage
  humidity?: number;
  // the URL of the related icon. Simply prefix with either http or https to use it
  icon_url?: string;
  // region related to the location
  region?: string;
  // temperature in fahrenheit
  temp_f?: number;
  // timezone of the location
  timezone?: string;
  // wind in kph
  wind_kph?: number;
  // cloud cover percentage
  cloud?: number;
  // country of the request
  country?: string;
  // feels like in celsius
  feels_like_c?: number;
  // feels like in fahrenheit
  feels_like_f?: number;
  // the local time
  local_time?: string;
  // e.g -77.46
  longitude?: number;
  // wind in mph
  wind_mph?: number;
}
