import Vue from 'vue'
import Vuex from 'vuex'
import { requestFetch } from '@/utils/requestFetch'
import { createWeather } from '@/utils/createWeather'
import { toKelvin, toFahrenheit } from '@/utils/updateUnits'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    message: { display: false, text: null },
    weather: {},
    units: { current: 'C', array: ['C', 'K', 'F'] },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    setMessage(state, payload) {
      state.message = { ...payload }
    },
    setWeather(state, payload) {
      state.weather = payload
    },
    setUnits(state, payload) {
      state.units = payload
    },
  },
  getters: {
    loading: (state) => state.loading,
    message: (state) => state.message,
    weather: (state) => state.weather,
    units: (state) => state.units,
  },
  actions: {
    showMessage({ commit }, msg) {
      commit('setMessage', { display: true, text: msg })
    },
    resetMessage({ commit }) {
      commit('setMessage', { display: false, text: null })
    },
    async fetchData({ commit, dispatch }, url) {
      try {
        const data = await requestFetch(url)
        const weather = createWeather(data)

        commit('setWeather', weather)
        commit('setLoading', false)
      } catch (err) {
        dispatch('showMessage', 'Oops! Nothing found or server problems!')
      }
    },
    preloadWeather({ commit, dispatch }) {
      commit('setLoading', true)

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setTimeout(() => {
            dispatch(
              'fetchData',
              `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            )
          }, 1000)
        },
        (error) => {
          dispatch(
            'showMessage',
            'Please turn on geolocation or use the search!'
          )
        }
      )
    },
    searchWeather({ commit, dispatch }, city) {
      if (!city) {
        return dispatch('showMessage', 'Please enter city!')
      }

      dispatch('resetMessage')

      commit('setLoading', true)

      setTimeout(() => {
        dispatch(
          'fetchData',
          `https://api.openweathermap.org/data/2.5/weather?q=${city}`
        )
      }, 1000)
    },
    changeUnits({ commit, state }) {
      let weather = JSON.parse(JSON.stringify(state.weather))
      let units = JSON.parse(JSON.stringify(state.units))
      let currentUnit = null

      units.array.forEach((unit, index) => {
        if (unit === units.current) {
          currentUnit = units.array[index + 1]

          if (currentUnit === 'K') {
            weather.temp.temp = toKelvin(weather.temp.immutableTemp)
            weather.temp.tempMin = toKelvin(weather.temp.immutableTempMin)
            weather.temp.tempMax = toKelvin(weather.temp.immutableTempMax)
          }

          if (currentUnit === 'F') {
            weather.temp.temp = toFahrenheit(weather.temp.immutableTemp)
            weather.temp.tempMin = toFahrenheit(weather.temp.immutableTempMin)
            weather.temp.tempMax = toFahrenheit(weather.temp.immutableTempMax)
          }
        }

        if (units.current === units.array[units.array.length - 1]) {
          currentUnit = units.array[0]

          weather.temp.temp = weather.temp.immutableTemp
          weather.temp.tempMin = weather.temp.immutableTempMin
          weather.temp.tempMax = weather.temp.immutableTempMax
        }
      })

      units.current = currentUnit

      commit('setWeather', weather)
      commit('setUnits', units)
    },
  },
})
