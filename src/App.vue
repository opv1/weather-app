<template>
  <div id="app" class="app">
    <Message />
    <Search />
    <div class="app__container">
      <Loader v-if="loading" />
      <Weather v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Message from '@/components/Message'
import Search from '@/components/Search'
import Loader from '@/components/Loader'
import Weather from '@/components/Weather'

export default {
  name: 'App',
  components: {
    Message,
    Search,
    Loader,
    Weather,
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    ...mapActions(['preloadWeather']),
  },
  mounted() {
    this.preloadWeather()
  },
}
</script>

<style lang="scss">
@import '~weather-icons/css/weather-icons.css';

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background: linear-gradient(rgb(47, 150, 163), rgb(48, 62, 143));
}

.app {
  min-width: 320px;
  max-width: 1440px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
}
</style>
