<!--  -->
<template>
  <div class="tabBarItem" @click="BarClick" :class="{ active: isActive }">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    BarClick () {
      // console.log(this.$route)
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style lang="less" scoped>
.tabBarItem {
  height: 52px;
  text-align: center;
  flex: 1;
  font-size: 14px;
  [class*='yc-icon-'] {
    height: 28px;
    font-size: 24px;
    margin-top: 4px;
    margin-bottom: 3px;
  }
  &.active {
    color: var(--color-high-text);
  }
}
</style>
