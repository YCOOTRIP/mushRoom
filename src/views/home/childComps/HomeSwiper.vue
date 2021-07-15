<template>
  <van-swipe :autoplay="3000" lazy-render :stop-propagation="false">
    <van-swipe-item v-for="item in banners" :key="item.acm">
      <a :href="item.link"><img :src="item.image" /></a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
  /deep/.van-swipe__indicators {
    .van-swipe__indicator {
      background-color: #fff;
      opacity: 0.6;
      width: 8px;
      height: 8px;
      &.van-swipe__indicator--active {
        opacity: 1;
        background-color: rgba(212, 62, 46, 1);
      }
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
