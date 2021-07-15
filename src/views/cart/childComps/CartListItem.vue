<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="buttonClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ product.price }}</div>
        <div class="delete" @click="deleteGoods">删除</div>
        <button type="button" class="dec" @click="decGoods" :disabled="product.count <= 1">-</button>
        <div class="item-count">x{{ product.count }}</div>
        <button type="button" class="add" @click="addGoods">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return null
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    buttonClick() {
      this.product.checked = !this.product.checked
    },
    deleteGoods() {
      this.$store.dispatch('deleteGoods', this.product).then((res) => {
        this.$toast.show(res)
      })
    },
    decGoods() {
      this.$store.dispatch('decGoods', this.product)
    },
    addGoods() {
      this.$store.dispatch('addGoods', this.product)
    }
  }
}
</script>

<style lang="less" scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .item-selector {
    width: 14%;
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
  .item-img {
    padding: 5px;
    img {
      display: block;
      width: 80px;
      height: 100px;
      border-radius: 5px;
    }
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
    .item-title,
    .item-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .item-desc {
      margin-top: 15px;
      color: #666;
      font-size: 14px;
    }
    .info-bottom {
      height: 30px;
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      top: 17px;
      .item-price {
        color: orange;
        margin-right: auto;
      }
      .add,
      .dec {
        line-height: 18px;
        height: 20px;
        width: 20px;
        text-align: center;
        border: 1px solid #dadde0;
        border-radius: 3px;
      }
      .delete {
        font-size: 15px;
        width: 50px;
        text-align: center;
        border-radius: 5px;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        background-color: #efefef;
      }
      .item-count {
        margin: 0 10px;
      }
    }
  }
}
</style>
