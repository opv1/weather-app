<template>
  <form class="search">
    <input
      class="search__input"
      v-model="value"
      type="text"
      :placeholder="placeholder"
    />
    <button class="search__button" @click.prevent="searchWeather(value)">
      Search
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Search',
  data: () => ({
    value: '',
    placeholder: 'Enter city',
  }),
  methods: {
    ...mapActions(['searchWeather']),
  },
}
</script>

<style scoped>
.search {
  display: flex;
  align-items: center;
  margin: 1rem;
}

.search__input {
  outline: none;
  border: none;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #eee;
  border-radius: 10px;
  color: #fff;
  padding: 0.5rem 1rem;
}

.search__input::placeholder {
  color: #fff;
}

.search__button {
  outline: none;
  border: 1px solid transparent;
  color: #fff;
  background: none;
  cursor: pointer;
  margin-left: 1rem;
  transition: border 0.3s;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}

.search__button:hover {
  border: 1px solid #eee;
}
</style>
