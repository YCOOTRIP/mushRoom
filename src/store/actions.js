import { ADD_COUNT, ADD_TO_CART, DELETE_GOODS, DEC_GOODS } from './mutation-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('宝贝数量加一!')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('添加成功!在购物车等亲~')
      }
    })
  },
  deleteGoods(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(DELETE_GOODS, payload)
      resolve('商品删除成功!')
    })
  },
  decGoods(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(DEC_GOODS, payload)
    })
  },
  addGoods(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(ADD_COUNT, payload)
    })
  }
}
