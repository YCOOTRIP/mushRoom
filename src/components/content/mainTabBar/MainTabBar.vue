<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #icon>
        <div class="yc-icon-home"></div>
      </template>
      <template #text>
        <span>首页</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template #icon>
        <div class="yc-icon-category"></div>
      </template>
      <template #text>
        <span>分类</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template #icon>
        <div class="yc-icon-cart">
          <div class="sum" v-show="isShowSum">{{ cartLength }}</div>
        </div>
      </template>
      <template #text>
        <span>购物车</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template #icon>
        <div class="yc-icon-profile"></div>
      </template>
      <template #text>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'MainTabBar',
  computed: {
    ...mapGetters(['cartLength']),
    isShowSum() {
      return this.cartLength > 0
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less" scoped>
.yc-icon-cart {
  .sum {
    position: relative;
    left: 50px;
    bottom: 26px;
    width: 16px;
    height: 16px;
    line-height: 16px;
    color: #fff;
    background-color: #f00;
    border-radius: 50%;
    text-align: center;
    font-size: 10px;
  }
}
</style>
