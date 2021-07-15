<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartList" :key="item.iid" :product='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from '@/views/cart/childComps/CartListItem'
import { mapGetters } from 'vuex'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },

  components: {
    CartListItem
  }
}
</script>

<style lang="less" scoped>
.cart-list {
  width: 100%;
}
</style>
