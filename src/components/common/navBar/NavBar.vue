<template>
  <div id="navBar">
    <div class="lef"><slot name="icon1"></slot></div>
    <div class="cen"><slot name="text"></slot></div>
    <div class="rig"><slot name="icon2"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
#navBar {
  display: flex;
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .lef,
  .rig {
    width: 15%;
    [class*='yc-icon'] {
      font-size: 24px;
    }
  }
  .cen {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
  }
}
</style>
