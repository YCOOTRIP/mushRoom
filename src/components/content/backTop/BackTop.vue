<template>
  <div class="back-top">
    <i class="yc-icon-rising"></i>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  right: 20px;
  bottom: 60px;
  .yc-icon-rising {
    opacity: 0.7;
    color: #ff4141;
    background-color: #fafaf9;
    font-size: 40px;
    border-radius: 50%;
  }
}
</style>
