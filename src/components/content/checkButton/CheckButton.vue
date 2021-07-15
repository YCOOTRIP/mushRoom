<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~@/assets/img/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check {
  background-color: var(--color-high-text);
  border-color: var(--color-high-text);
}
</style>
