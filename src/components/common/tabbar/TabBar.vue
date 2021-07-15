<!--  -->
<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="less" scoped>
#tabBar {
  display: flex;
  position: fixed;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  // box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>
