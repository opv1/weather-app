import { getIcon } from '@/utils/getIcon'

export const createWeather = (data) => {
  const weatherIcons = {
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sleet',
    Rain: 'wi-storm-showers',
    Snow: 'wi-snow',
    Atmosphere: 'wi-fog',
    Clear: 'wi-day-sunny',
    Clouds: 'wi-day-fog',
  }

  const dataWeather = {
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description.toUpperCase(),
    icon: getIcon(weatherIcons, data.weather[0].id),
    main: data.weather[0].main,
    temp: {
      immutableTemp: data.main.temp,
      immutableTempMin: data.main.temp_min,
      immutableTempMax: data.main.temp_max,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
    },
  }

  return dataWeather
}
