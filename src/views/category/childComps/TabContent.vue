<template>
  <div class="tab-content">
    <my-scroll :probeType="3" class="wrapper" ref="scroll" @scroll="contentScroll">
      <div class="cate-list">
        <div class="cate-list-item" v-for="item in cateList" :key="item.acm">
          <a :href="item.link">
            <img :src="item.image" alt="" />
            <span>{{ item.title }}</span>
          </a>
        </div>
      </div>
      <tab-control :titles="['综合', '新品', '销量']" ref="tabControl" @tabClick="tabClick"></tab-control>
      <goods-list :goodsList="categoryDetail"></goods-list>
    </my-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getSubcategory, getCategoryDetail } from '@/network/category'
import MyScroll from '@/components/common/scroll/Scroll'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import { BackTopMixin } from '@/common/mixins'

export default {
  name: 'TabContent',
  mixins: [BackTopMixin],
  mounted() {
    // 监听此事件 需要等待此事件发送过来 如果在回调函数外初始化会拿不到数据
    this.$bus.$on('dataTransmission', (value) => {
      this.keys = value
      // console.log(this.keys)
      // 给页面要展示的初始数据(正在流行)
      this._getSubcategory(this.keys.maitKeys[0])
      this._getCategoryDetail(this.keys.miniWallkeys[0], this.currentType)
    })
    this.$bus.$on('menuChange', (value) => {
      this.indexForMiniWallkeys = value
      this._getSubcategory(this.keys.maitKeys[value])
      this._getCategoryDetail(this.keys.miniWallkeys[value], this.currentType)
      this.$refs.scroll.scrollTo(0, 0)
    })
  },
  data() {
    return {
      cateList: [],
      categoryDetail: [],
      currentType: 'pop',
      keys: {},
      indexForMiniWallkeys: 0
    }
  },
  components: {
    MyScroll,
    TabControl,
    GoodsList
  },
  methods: {
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
      this.$refs.tabControl.currentIndex = index
      this._getCategoryDetail(this.keys.miniWallkeys[this.indexForMiniWallkeys], this.currentType)
    },
    async _getSubcategory(key) {
      const { data: res } = await getSubcategory(key)
      this.cateList = res.data.list
      // console.log(this.cateList)
    },
    async _getCategoryDetail(key, type) {
      const { data: res } = await getCategoryDetail(key, type)
      this.categoryDetail = res
      // console.log(this.categoryDetail)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
    }
  }
}
</script>

<style lang="less" scoped>
.tab-content {
  position: absolute;
  top: 44px;
  left: 100px;
  width: calc(100% - 100px);
  height: calc(100% - 44px - 49px);
  .wrapper {
    overflow: hidden;
    height: 100%;
    .cate-list {
      padding: 20px 8px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .cate-list-item {
        width: 30%;
        img {
          display: block;
          width: 80%;
          position: relative;
          left: 50%;
          transform: translate(-50%, 0);
        }
        span {
          margin: 15px 0;
          display: inline-block;
          width: 100%;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
}
</style>
