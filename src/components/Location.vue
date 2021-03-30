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

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  &__timezone {
    margin: 0;
    margin-bottom: 1rem;
    color: #fff;
    font-size: 3rem;
  }

  &__icon {
    display: block;
    color: #fff;
    font-size: 7rem;
    margin: 2rem;
  }
}
</style>
