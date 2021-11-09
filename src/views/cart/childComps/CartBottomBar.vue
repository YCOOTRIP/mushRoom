<template>
  <div class="cartBottomBar">
    <div class="selectAll">
      <div class="selector">
        <check-button :is-checked="selectAll" @click.native="buttonClick" />
      </div>
      <span>全选</span>
    </div>
    <div class="sum">合计: {{ totalPrice }}</div>
    <div class="buy" @click="buyClick">结算({{ all }})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  computed: {
    ...mapGetters(['cartList']),
    selectAll () {
      if (this.cartList.length === 0) return false
      return this.cartList.every((item) => item.checked)
    },
    totalPrice () {
      return (
        '￥' +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
          .toFixed(2)
      )
    },
    all () {
      return this.cartList.filter((item) => item.checked).length
    }
  },
  components: {
    CheckButton
  },
  methods: {
    buttonClick () {
      this.selectAll
        ? this.cartList.forEach((item) => (item.checked = false))
        : this.cartList.forEach((item) => (item.checked = true))
    },
    buyClick () {
      if (this.all === 0) {
        this.$toast.show('请选择要购买的商品')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cartBottomBar {
  display: flex;
  height: 40px;
  background-color: #eee;
  .selectAll {
    display: flex;
    margin-left: 5px;
    height: 40px;
    width: 80px;
    .selector {
      display: flex;
      align-items: center;
      .check-button {
        width: 20px;
        height: 20px;
        /deep/ img {
          width: 90%;
          height: 90%;
        }
      }
    }
    span {
      line-height: 40px;
      margin-left: 5px;
    }
  }
  .sum {
    line-height: 40px;
    flex: 1;
  }
  .buy {
    line-height: 40px;
    width: 90px;
    text-align: center;
    background-color: #ff4500;
    color: white;
  }
}
</style>
