<template>
  <div id="app">
    <span class="message" v-show="$store.getters.getMessage.display">{{
      $store.getters.getMessage.text
    }}</span>
    <Search />
    <Weather />
  </div>
</template>

<script>
import Search from '@/components/Search'
import Weather from '@/components/Weather'

export default {
  name: 'App',
  components: {
    Search,
    Weather,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Karla', Arial, Helvetica, sans-serif;
  background: linear-gradient(rgb(47, 150, 163), rgb(48, 62, 143));
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.message {
  color: #fff;
  font-size: 1.5rem;
}
</style>
