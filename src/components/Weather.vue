<template>
  <div class="weather">
    <Location />
    <Temperature />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Location from '@/components/Location'
import Temperature from '@/components/Temperature'

export default {
  name: 'Weather',
  components: {
    Location,
    Temperature,
  },
  methods: {
    ...mapActions(['preloadWeather']),
  },
  beforeMount() {
    this.preloadWeather()
  },
}
</script>

<style scoped>
.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
</style>
