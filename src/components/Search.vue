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
  margin: 1rem 0;

  &__input,
  &__button {
    outline: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    color: #fff;
  }

  &__input {
    border: 1px solid #eee;
    width: 100%;
    background: transparent;

    &::placeholder {
      color: #fff;
    }
  }

  &__button {
    margin-left: 1rem;
    border: 1px solid transparent;
    background: none;
    transition: border 0.3s;
    cursor: pointer;

    &:hover {
      border: 1px solid #eee;
    }
  }
}
</style>
