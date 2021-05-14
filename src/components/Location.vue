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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  &__timezone {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 3rem;
    text-align: center;
    color: #fff;
  }

  &__icon {
    display: block;
    margin: 2rem;
    font-size: 7rem;
    color: #fff;
  }
}
</style>
