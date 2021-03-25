<template>
  <div class="temperature">
    <h2 class="temperature__degree">
      {{ $store.getters.getDataWeather.fahrenheit }} &deg;F
    </h2>
    <div class="temperature__block">
      <span>{{ $store.getters.getDataWeather.tempMin }} &deg;F</span>
      <span>{{ $store.getters.getDataWeather.tempMax }} &deg;F</span>
    </div>
    <p class="temperature__description">
      {{ $store.getters.getDataWeather.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Temperature',
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
