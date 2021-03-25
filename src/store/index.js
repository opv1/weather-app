import Vue from 'vue'
import Vuex from 'vuex'
import { requestFetch } from '@/utils/requestFetch'
import { getIcon } from '@/utils/getIcon'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    message: '',
    dataWeather: {},
    weatherIcons: {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog',
    },
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload
    },
    setDataWeather(state, payload) {
      state.dataWeather = payload
    },
  },
  getters: {
    getMessage: (state) => state.message,
    getDataWeather: (state) => state.dataWeather,
  },
  actions: {
    preloadWeather(context) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const data = await requestFetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            )

            const weather = {
              city: data.name,
              country: data.sys.country,
              description: data.weather[0].description.toUpperCase(),
              fahrenheit: data.main.temp,
              icon: getIcon(this.state.weatherIcons, data.weather[0].id),
              main: data.weather[0].main,
              tempMax: data.main.temp_max,
              tempMin: data.main.temp_min,
            }

            context.commit('setDataWeather', weather)
          } catch (err) {
            context.commit('setMessage', err)
          }
        },
        (error) => {
          context.commit(
            'setMessage',
            'Please turn on geolocation or use the search'
          )
        }
      )
    },
    async searchWeather(context, city) {
      try {
        if (city === '') {
          console.log('empty value')
          return
        }
        const data = await requestFetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}`
        )

        const weather = {
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description.toUpperCase(),
          fahrenheit: data.main.temp,
          icon: getIcon(this.state.weatherIcons, data.weather[0].id),
          main: data.weather[0].main,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
        }

        context.commit('setDataWeather', weather)
      } catch (err) {
        context.commit('setMessage', err)
      }
    },
  },
  modules: {},
})
