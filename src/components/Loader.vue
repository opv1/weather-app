<template>
  <div class="loader">
    <div class="loader__roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@keyframes loader__roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader__roller {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  div {
    transform-origin: 40px 40px;
    animation: loader__roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &::after {
      content: ' ';
      position: absolute;
      display: block;
      margin: -4px 0 0 -4px;
      border-radius: 50%;
      width: 7px;
      height: 7px;
      background: #fff;
    }

    &:nth-child(1) {
      animation-delay: -0.036s;
    }

    &:nth-child(1)::after {
      left: 63px;
      top: 63px;
    }

    &:nth-child(2) {
      animation-delay: -0.072s;
    }

    &:nth-child(2)::after {
      left: 56px;
      top: 68px;
    }

    &:nth-child(3) {
      animation-delay: -0.108s;
    }

    &:nth-child(3)::after {
      left: 48px;
      top: 71px;
    }

    &:nth-child(4) {
      animation-delay: -0.144s;
    }

    &:nth-child(4)::after {
      left: 40px;
      top: 72px;
    }

    &:nth-child(5) {
      animation-delay: -0.18s;
    }

    &:nth-child(5)::after {
      left: 32px;
      top: 71px;
    }

    &:nth-child(6) {
      animation-delay: -0.216s;
    }

    &:nth-child(6)::after {
      left: 24px;
      top: 68px;
    }

    &:nth-child(7) {
      animation-delay: -0.252s;
    }

    &:nth-child(7)::after {
      left: 17px;
      top: 63px;
    }

    &:nth-child(8) {
      animation-delay: -0.288s;
    }

    &:nth-child(8)::after {
      left: 12px;
      top: 56px;
    }
  }
}
</style>
