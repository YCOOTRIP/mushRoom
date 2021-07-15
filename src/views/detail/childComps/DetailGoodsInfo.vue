<template>
  <div class="goodsInfo" v-if="Object.keys(detailINfo).length !== 0">
    <div class="infoDesc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailINfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="infoKey">
      {{ detailINfo.detailImage[0].key }}
    </div>
    <div class="infoList">
      <img v-for="(item, index) in detailINfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imageLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailINfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style lang="less" scoped>
.goodsInfo {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  .infoDesc {
    padding: 0 15px;
    .start {
      float: left;
    }
    .end {
      float: right;
    }
    .start,
    .end {
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
      position: relative;
    }
    .start::before,
    .end::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #333;
      bottom: 0;
    }
    .end::after {
      right: 0;
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }
  .infoKey {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .infoList img {
    width: 100%;
  }
}
</style>
