<template>
  <span :class="['message', { message__hide: !message.display }]"
    >{{ message.text }}
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Message',
  computed: {
    ...mapGetters(['message']),
  },
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  opacity: 1;
  transition: opacity 0.3s;

  &__hide {
    opacity: 0;
  }
}
</style>
