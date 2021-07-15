<template>
  <div>
    <nav-bar>
      <template #icon1><i class="yc-icon-arrow-left" @click="backClick"></i></template>
      <template #text>
        <span
          v-for="(item, index) in titles"
          :key="index"
          @click="titleChange(index)"
          :class="{ active: index === currentIndex }"
          >{{ item }}</span
        >
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
export default {
  name: 'DetailNav',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleChange(index) {
      this.currentIndex = index
      this.$emit('titleChange', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  color: var(--color-high-text);
}
</style>
