<template>
  <div id="app">
    <Message />
    <Search />
    <div class="container">
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
@import '~normalize.css';
@import '~weather-icons/css/weather-icons.css';

* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
  background: linear-gradient(rgb(47, 150, 163), rgb(48, 62, 143));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0 1rem;
  min-width: 320px;
  min-height: 100vh;
  max-width: 1440px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
</style>
