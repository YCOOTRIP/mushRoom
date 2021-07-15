<template>
  <div class="empty-cart">
    <img src="~@/assets/img/empty.svg" alt="" />
    <p>购物车竟然是空的</p>
    <p>再忙，也要记得买点什么犒赏自己~</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyCart'
}
</script>

<style lang="less" scoped>
.empty-cart {
  width: 100%;
  padding: 30px 10px;
  text-align: center;
  img {
    width: 150px;
  }
  p {
    margin: 10px;
    &:nth-of-type(1) {
      font-size: 16px;
      color: #333;
    }
    &:nth-of-type(2) {
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
