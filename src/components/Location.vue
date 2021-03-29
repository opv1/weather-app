<template>
  <div class="location">
    <h1 class="location__timezone">
      {{ weather.city }},
      {{ weather.country }}
    </h1>
    <i :class="['location__icon', `wi ${weather.icon}`]"></i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Location',
  computed: {
    ...mapGetters(['weather']),
  },
}
</script>

<style scoped>
@import '~weather-icons/css/weather-icons.css';

.location {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.location__timezone {
  margin: 0;
  color: #fff;
  font-size: 3rem;
}

.location__icon {
  display: block;
  color: #fff;
  font-size: 7rem;
  margin: 1rem;
}

.location__icon::before {
  display: block;
}
</style>
