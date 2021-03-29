<template>
  <span :class="['message', { message__hide: !message.display }]">{{
    message.text
  }}</span>
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

<style>
.message {
  height: 30px;
  transition: opacity 0.3s;
  opacity: 1;
}

.message__hide {
  opacity: 0;
}
</style>
