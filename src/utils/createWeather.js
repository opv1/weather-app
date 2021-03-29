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

  const toCelsius = (temp) => {
    return Math.floor(temp - 273.15)
  }

  const dataWeather = {
    city: data.name,
    country: data.sys.country,
    description: data.weather[0].description.toUpperCase(),
    icon: getIcon(weatherIcons, data.weather[0].id),
    main: data.weather[0].main,
    temp: {
      celsius: true,
      tempC: toCelsius(data.main.temp),
      tempK: data.main.temp,
      tempMinC: toCelsius(data.main.temp_min),
      tempMaxC: toCelsius(data.main.temp_max),
      tempMinK: data.main.temp_min,
      tempMaxK: data.main.temp_max,
    },
  }

  return dataWeather
}
