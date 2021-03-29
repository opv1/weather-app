<template>
  <div class="weather">
    <Location />
    <Temperature />
  </div>
</template>

<script>
import Location from '@/components/Location'
import Temperature from '@/components/Temperature'

export default {
  name: 'Weather',
  components: {
    Location,
    Temperature,
  },
}
</script>

<style scoped>
.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
  height: 50vh;
}
</style>
