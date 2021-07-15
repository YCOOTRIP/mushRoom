import { ADD_TO_CART, ADD_COUNT, DELETE_GOODS, DEC_GOODS } from './mutation-types'
export default {
  [ADD_COUNT](state, payload) {
    const p = state.cartList.find((item) => item.iid === payload.iid)
    p.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  [DELETE_GOODS](state, payload) {
    const i = state.cartList.findIndex((item) => item.iid === payload.iid)
    state.cartList.splice(i, 1)
  },
  [DEC_GOODS](state, payload) {
    const p = state.cartList.find((item) => item.iid === payload.iid)
    p.count--
  }
}
