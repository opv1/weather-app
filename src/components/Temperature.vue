<template>
  <div class="temperature">
    <h2
      class="temperature__degree"
      @click="changeUnit"
      v-if="$store.getters.getDataWeather.temp.celsius === true"
    >
      {{ $store.getters.getDataWeather.temp.tempC }} &deg;C
    </h2>
    <h2 class="temperature__degree" @click="changeUnit" v-else>
      {{ $store.getters.getDataWeather.temp.tempF }} &deg;F
    </h2>
    <div
      class="temperature__block"
      v-if="$store.getters.getDataWeather.temp.celsius === true"
    >
      <span>{{ $store.getters.getDataWeather.temp.tempMinC }} &deg;C</span>
      <span>{{ $store.getters.getDataWeather.temp.tempMaxC }} &deg;C</span>
    </div>
    <div class="temperature__block" v-else>
      <span>{{ $store.getters.getDataWeather.temp.tempMinF }} &deg;F</span>
      <span>{{ $store.getters.getDataWeather.temp.tempMaxF }} &deg;F</span>
    </div>
    <p class="temperature__description">
      {{ $store.getters.getDataWeather.description }}
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Temperature',
  methods: {
    ...mapActions(['changeUnit']),
  },
}
</script>

<style scoped>
.temperature {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 15vh;
}

.temperature__degree {
  margin: 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

.temperature__block {
  display: flex;
  align-items: center;
}

.temperature__block span {
  margin: 0 1rem;
  color: #fff;
}

.temperature__description {
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
}
</style>
