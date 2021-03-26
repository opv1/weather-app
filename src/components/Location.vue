<template>
  <div class="location">
    <h1 class="location__timezone">
      {{ $store.getters.getDataWeather.city }},
      {{ $store.getters.getDataWeather.country }}
    </h1>
    <i
      :class="['location__icon', `wi ${$store.getters.getDataWeather.icon}`]"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'Location',
}
</script>

<style scoped>
@import '~weather-icons/css/weather-icons.css';

.location {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 30vh;
}

.location__timezone {
  margin: 0;
  color: #fff;
  font-size: 3rem;
}

.location__icon {
  color: #fff;
  font-size: 7rem;
}
</style>
