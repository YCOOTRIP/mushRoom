<template>
  <div class="baseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="goodsTop">
      <div class="title">{{ goods.title }}</div>
      <span class="nPrice">{{ goods.newPrice }}</span>
      <span class="oPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-show="isShowDis">{{ goods.discount }}</span>
    </div>
    <div class="goodsMid">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="goodsBot">
      <div class="goodsSer" v-for="index in goods.services.length - 1" :key="index">
        <!--全部遍历完用v-for-->
        <img :src="goods.services[index - 1].icon" alt="" /><!-- index 从1开始所以要减一-->
        <span>{{ goods.services[index - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    isShowDis() {
      return this.goods.discount !== ''
    }
  }
}
</script>

<style lang="less" scoped>
.baseInfo {
  color: #999;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
  .goodsTop {
    margin: 10px 0;
    .title {
      color: #222;
      margin-bottom: 5px;
    }
    .nPrice {
      font-size: 24px;
      color: var(--color-high-text);
      margin-right: 10px;
    }
    .oPrice {
      font-size: 13px;
      text-decoration: line-through;
      margin-right: 10px;
    }
    .discount {
      font-size: 12px;
      background-color: var(--color-high-text);
      border-radius: 8px;
      padding: 2px 5px;
      color: #fff;
    }
  }
  .goodsMid {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    span {
      margin-bottom: 7px;
    }
  }
  .goodsBot {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .goodsSer {
      img {
        width: 14px;
        height: 14px;
      }
      span {
        color: #333;
        font-size: 13px;
      }
    }
  }
}
</style>
