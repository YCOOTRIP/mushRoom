<template>
  <div class="cart">
    <nav-bar class="nav">
      <template #text> 购物车({{ cartLength }}) </template>
    </nav-bar>
    <empty-cart v-if="showEmpty"></empty-cart>
    <my-scroll :probeType="3" class="container" ref="scroll">
      <cart-list></cart-list>
    </my-scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
import CartList from '@/views/cart/childComps/CartList'
import MyScroll from '@/components/common/scroll/Scroll'
import CartBottomBar from '@/views/cart/childComps/CartBottomBar'
import EmptyCart from '@/views/cart/childComps/EmptyCart'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    MyScroll,
    CartBottomBar,
    EmptyCart
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
    showEmpty() {
      return !(this.cartLength > 0)
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="less" scoped>
.cart {
  position: relative;
  background-color: #fff;
  height: 100vh;
  .container {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px + 40px;
  }
  .nav {
    background-color: var(--color-tint);
    font-weight: bold;
    color: #fff;
  }
  .bottom-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
  }
}
</style>
