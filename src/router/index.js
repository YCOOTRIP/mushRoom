import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const Home = () => import(/* webpackChunkName: "Home_category" */ '@/views/home/Home')
const Category = () => import(/* webpackChunkName: "Home_category" */ '@/views/category/Category')

const Cart = () => import(/* webpackChunkName: "Cart_Profile_Detail" */ '@/views/cart/Cart')
const Profile = () => import(/* webpackChunkName: "Cart_Profile_Detail" */ '@/views/profile/Profile')
const Detail = () => import(/* webpackChunkName: "Cart_Profile_Detail" */ '@/views/detail/Detail')

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/profile', component: Profile },
  { path: '/detail/:iid', component: Detail }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.NODE_ENV === 'production' ? '/mushroom' : ''
})

export default router
