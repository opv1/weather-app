import { getIcon } from '@/utils/getIcon'
import { toCelsius } from '@/utils/toCelsius'

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
      celsius: true,
      tempC: toCelsius(data.main.temp),
      tempF: data.main.temp,
      tempMinC: toCelsius(data.main.temp_min),
      tempMaxC: toCelsius(data.main.temp_max),
      tempMinF: data.main.temp_min,
      tempMaxF: data.main.temp_max,
    },
  }

  return dataWeather
}
