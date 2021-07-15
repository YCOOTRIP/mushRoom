<template>
  <div class="category">
    <nav-bar class="nav">
      <template #text>
        商品分类
      </template>
    </nav-bar>
    <tab-menu :categories="categories"></tab-menu>
    <tab-content></tab-content>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
import { getCategory } from '@/network/category'
import TabMenu from '@/views/category/childComps/TabMenu'
import TabContent from '@/views/category/childComps/TabContent'
export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu,
    TabContent
  },
  data() {
    return {
      categories: []
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    async _getCategory() {
      const { data: res } = await getCategory()
      // console.log(res)
      this.categories = res.data.category.list
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  position: relative;
  height: 100vh;
  .nav {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
}
</style>
