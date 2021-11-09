<template>
  <div id="detail">
    <detail-nav @titleChange="navChange" ref="Nav"></detail-nav>
    <my-scroll :probeType="3" class="container" ref="scroll" @scroll="contentScroll">
      <detail-swiper :banners="topImage" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailINfo="detailInfo" @detailImageLoad="detailImageLoad" />
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goodsList="recommends" />
    </my-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar class="bottom-bar" @addToCart="addCart" />
  </div>
</template>

<script>
import { getDetail, getRecommend, Goods, Shop, GoodsParam } from '@/network/detail'
import { debounce } from '@/common/utils'
import DetailNav from './childComps/DetailNav.vue'
import DetailSwiper from '@/views/detail/childComps/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
import MyScroll from '@/components/common/scroll/Scroll'
import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo'
import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo'
import GoodsList from '@/components/content/goods/GoodsList'
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'
import { BackTopMixin } from '@/common/mixins'

export default {
  name: 'Detail',
  mixins: [BackTopMixin],
  components: {
    MyScroll,
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  data () {
    return {
      iid: '',
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      debouncedGetThemeTopYs: null,
      currentIndex: 0
    }
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 获取详情数据
    this.getDetail()
    // 获取推荐数据
    this.getRecommend()
  },
  mounted () {
    this.debouncedGetThemeTopYs = debounce(this.getThemeTopY, 300)
  },
  methods: {
    async getDetail () {
      const { data: res } = await getDetail(this.iid)
      const data = res.result
      // console.log(data)
      // 轮播图数据
      this.topImage = data.itemInfo.topImages
      // 商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 店铺信息
      this.shop = new Shop(data.shopInfo)
      // 保存商品的详情数据
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    },
    async getRecommend () {
      const { data: res } = await getRecommend()
      this.recommends = res.data.list
    },
    detailImageLoad () {
      this.debouncedGetThemeTopYs()
      // console.log('调用是避免不了重复调用的')
    },
    getThemeTopY () {
      // 图片很多的话还是会多次调用
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log('但真正有用的方法只调用了一次')
      // console.log(this.themeTopYs)
    },
    navChange (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    },
    contentScroll (position) {
      const y = -position.y
      const length = this.themeTopYs.length
      // i 只能取0,1,2,3
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && y >= this.themeTopYs[i] && y < this.themeTopYs[i + 1]) {
          this.currentIndex = i
          this.$refs.Nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = y > 2000
    },
    addCart () {
      // 1.获取商品要展示的信息
      const product = {}
      product.iid = this.iid
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice

      this.$store.dispatch('addCart', product).then((res) => {
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  .container {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .bottom-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
