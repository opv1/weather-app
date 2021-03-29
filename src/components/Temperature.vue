<template>
  <div class="temperature">
    <h2
      class="temperature__degree"
      @click="changeUnit"
      v-if="weather.temp.celsius === true"
    >
      {{ weather.temp.tempC }} &deg;C
    </h2>
    <h2 class="temperature__degree" @click="changeUnit" v-else>
      {{ weather.temp.tempK }} &deg;K
    </h2>
    <div class="temperature__block" v-if="weather.temp.celsius === true">
      <span>{{ weather.temp.tempMinC }} &deg;C</span>
      <span>{{ weather.temp.tempMaxC }} &deg;C</span>
    </div>
    <div class="temperature__block" v-else>
      <span>{{ weather.temp.tempMinK }} &deg;K</span>
      <span>{{ weather.temp.tempMaxK }} &deg;K</span>
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
    ...mapGetters(['weather']),
  },
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
  height: 50%;
}

.temperature__degree {
  margin: 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 10px;
  transition: background 0.3s;
}

.temperature__degree:hover {
  background: rgba(255, 255, 255, 0.3);
}

.temperature__block {
  display: flex;
  align-items: center;
}

.temperature__block span {
  margin: 1rem;
  color: #fff;
}

.temperature__description {
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
}
</style>
