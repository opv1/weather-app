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

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  margin: 1rem;

  &__input {
    outline: none;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    width: 100%;
    color: #fff;
    background: transparent;

    &::placeholder {
      color: #fff;
    }
  }

  &__button {
    margin-left: 1rem;
    outline: none;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    color: #fff;
    background: none;
    transition: border 0.3s;
    cursor: pointer;

    &:hover {
      border: 1px solid #eee;
    }
  }
}
</style>
