<template>
  <div class="tab-menu">
    <my-scroll :probeType="3" class="wrapper">
      <div class="menu-list">
        <div
          class="menu-list-item"
          v-for="(item, index) in categories"
          @click="itemClick(index)"
          :key="item.acm"
          :class="{ active: index === currentIndex }"
        >
          {{ item.title }}
        </div>
      </div>
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from '@/components/common/scroll/Scroll'
export default {
  name: 'TabMenu',
  data() {
    return {
      currentIndex: 0,
      keys: {
        maitKeys: [],
        miniWallkeys: []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$bus.$emit('menuChange', index)
    },
    getKeys() {
      for (let i = 0; i < this.categories.length; i++) {
        this.keys.maitKeys[i] = this.categories[i].maitKey
        this.keys.miniWallkeys[i] = this.categories[i].miniWallkey
      }
    }
  },
  components: {
    MyScroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    categories(newVal, oldVal) {
      newVal && this.getKeys()
      this.$bus.$emit('dataTransmission', this.keys)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-menu {
  position: relative;
  height: calc(100% - 44px - 49px);
  width: 100px;
  background-color: #f6f6f6;
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    .menu-list {
      display: flex;
      flex-direction: column;
      .menu-list-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
        &.active {
          font-weight: 700;
          color: var(--color-high-text);
          background-color: #fff;
          border-left: 3px solid var(--color-high-text);
        }
      }
    }
  }
}
</style>
