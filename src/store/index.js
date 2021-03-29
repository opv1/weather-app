import Vue from 'vue'
import Vuex from 'vuex'
import { requestFetch } from '@/utils/requestFetch'
import { createWeather } from '@/utils/createWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    message: { display: false, text: null },
    weather: {},
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
  },
  getters: {
    loading: (state) => state.loading,
    message: (state) => state.message,
    weather: (state) => state.weather,
  },
  actions: {
    preloadWeather({ commit, dispatch }) {
      commit('setLoading', true)

      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const data = await requestFetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
              )

              const weather = createWeather(data)

              commit('setWeather', weather)
              commit('setLoading', false)
            } catch (err) {
              dispatch('showMessage', 'Oops! Problems with the server')
            }
          },
          (error) => {
            dispatch(
              'showMessage',
              'Please turn on geolocation or use the search'
            )
          }
        )
      }, 1000)
    },
    async searchWeather({ commit, dispatch }, city) {
      if (!city) {
        return dispatch('showMessage', 'Please enter city')
      }

      dispatch('resetMessage')

      try {
        commit('setLoading', true)

        const data = await requestFetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}`
        )

        const weather = createWeather(data)

        commit('setWeather', weather)
        commit('setLoading', false)
      } catch (err) {
        dispatch(
          'showMessage',
          'Oops! Nothing was found or problems with the server'
        )
      }
    },
    changeUnit({ commit, state }) {
      let weather = { ...state.weather }
      weather.temp.celsius = !weather.temp.celsius

      commit('setWeather', weather)
    },
    showMessage({ commit }, msg) {
      commit('setMessage', { display: true, text: msg })
    },
    resetMessage({ commit }) {
      commit('setMessage', { display: false, text: null })
    },
  },
  modules: {},
})
