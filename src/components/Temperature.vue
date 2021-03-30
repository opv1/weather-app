<template>
  <div class="temperature">
    <h2 class="temperature__degree" @click="changeUnits">
      {{ weather.temp.temp }} &deg;{{ units.current }}
    </h2>
    <div class="temperature__block">
      <span>{{ weather.temp.tempMin }} &deg;{{ units.current }}</span>
      <span>{{ weather.temp.tempMax }} &deg;{{ units.current }}</span>
    </div>
    <p class="temperature__description">
      {{ weather.description }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Temperature',
  computed: {
    ...mapGetters(['weather', 'units']),
  },
  methods: {
    ...mapActions(['changeUnits']),
  },
}
</script>

<style lang="scss" scoped>
.temperature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;

  &__degree {
    margin: 0;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-size: 2rem;
    color: #fff;
    transition: background 0.3s;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__block {
    display: flex;
    align-items: center;

    span {
      margin: 1rem;
      color: #fff;
    }
  }

  &__description {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }
}
</style>
