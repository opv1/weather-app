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
      immutableTemp: Math.round(data.main.temp),
      immutableTempMin: Math.round(data.main.temp_min),
      immutableTempMax: Math.round(data.main.temp_max),
      temp: Math.round(data.main.temp),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
    },
  }

  return dataWeather
}
