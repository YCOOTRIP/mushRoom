<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImage () {
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick () {
      this.$router.push(`/detail/${this.goodsItem.iid}`)
    }
  }
}
</script>

<style lang="less" scoped>
@imgurl: '~@/assets/img/';
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url('@{imgurl}collect.svg') 0 0 ~'/' 14px 14px; /* img position size(宽14px 高14px)*/
      }
    }
  }
}
</style>
