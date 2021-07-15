<template>
  <div id="home">
    <nav-bar class="homeNav">
      <template #text>
        购物街
      </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabRef1"
      class="tab1"
      v-show="isTabFixed"
    />
    <my-scroll
      :probeType="3"
      :pullUpLoad="true"
      class="container"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabRef2" />
      <goods-list :goodsList="showGoods"></goods-list>
    </my-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from '@/network/home'

import NavBar from '@/components/common/navBar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import MyScroll from '@/components/common/scroll/Scroll'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import { BackTopMixin } from '@/common/mixins'

export default {
  name: 'Home',
  mixins: [BackTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    MyScroll,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      isTabFixed: false,
      goods: {
        // 数据模型
        pop: { loadedPage: 0, list: [] },
        new: { loadedPage: 0, list: [] },
        sell: { loadedPage: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.$refs.scroll.refresh()
  },
  methods: {
    // 获取首页轮播图和推荐数据
    async getHomeMultidata() {
      const { data: res } = await getHomeMultidata()
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    },
    // get goods info
    async getHomeGoods(type) {
      const newPage = this.goods[type].loadedPage + 1
      const { data: res } = await getHomeGoods(type, newPage)
      // console.log(res)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].loadedPage += 1
    },

    // tabClick
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabRef1.currentIndex = index
      this.$refs.tabRef2.currentIndex = index
    },
    // 实时监听滚动位置
    contentScroll(position) {
      this.isTabFixed = -position.y > this.$refs.tabRef2.$el.offsetTop
      this.isShowBackTop = -position.y > 2000
    },
    // 上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  height: 100vh;
  .homeNav {
    color: #fff;
    font-weight: bold;
    background-color: var(--color-tint);
  }
  .container {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab1 {
    position: relative;
    z-index: 9;
  }
}
</style>
