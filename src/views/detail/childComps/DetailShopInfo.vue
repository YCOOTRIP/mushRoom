<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shopMid">
      <div class="shopMidItem shopMidLeft">
        <div class="infoSells">
          <div class="sellsCount">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sellsText">总销量</div>
        </div>
        <div class="infoGoods">
          <div class="goodsCount">{{ shop.goodsCount }}</div>
          <div class="goodsText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMidItem shopMidRight">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score1" :class="{ better1: item.isBetter }">{{ item.score }}</td>
            <td class="score2" :class="{ better2: item.isBetter }">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopBot">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      return value < 10000 ? value : (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style lang="less" scoped>
.shopInfo {
  padding: 20px 8px;
  border-bottom: 5px solid #f2f5f8;
  .shopTop {
    display: flex;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin-right: 10px;
    }
  }
  .shopMid {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .shopMidItem {
      flex: 1;
    }
    .shopMidLeft {
      display: flex;
      justify-content: space-evenly;
      color: #333;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .shopMidRight {
      font-size: 13px;
      color: #333;
      table {
        margin-left: 30px;
        width: 120px;
        td {
          padding: 5px 0;
        }
      }
    }
  }
  .shopBot {
    text-align: center;
    margin-top: 10px;
    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
    }
  }
}
.sellsCount,
.goodsCount {
  font-size: 18px;
}
.sellsText,
.goodsText {
  margin-top: 10px;
  font-size: 12px;
}

.score1 {
  color: #5ea732; /* 默认*/
}
.better1 {
  color: #f13e3a; /*动态绑定 用于覆盖*/
}
.score2 span {
  background-color: #5ea732; /* 默认*/
  color: #fff;
  text-align: center;
}
.better2 span {
  background-color: #f13e3a; /*动态绑定 用于覆盖*/
}
</style>
