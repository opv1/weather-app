import Vue from 'vue'
import Vuex from 'vuex'
import { requestFetch } from '@/utils/requestFetch'
import { createWeather } from '@/utils/createWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    message: { display: false, text: '' },
    dataWeather: {},
  },
  mutations: {
    setMessage(state, payload) {
      state.message = { ...payload }
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

            const weather = createWeather(data)

            context.commit('setDataWeather', weather)
          } catch (err) {
            context.commit('setMessage', { display: true, text: err })
          }
        },
        (error) => {
          context.commit('setMessage', {
            display: true,
            text: 'Please turn on geolocation or use the search',
          })
        }
      )
    },
    async searchWeather(context, city) {
      try {
        if (!city) {
          return context.commit('setMessage', {
            display: true,
            text: 'Please enter city',
          })
        }

        const data = await requestFetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}`
        )

        const weather = createWeather(data)

        context.commit('setDataWeather', weather)
      } catch (err) {
        context.commit('setMessage', { display: true, text: err })
      }
    },
    changeUnit() {
      this.state.dataWeather.temp.celsius = !this.state.dataWeather.temp.celsius
    },
  },
  modules: {},
})
