<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tabControlItem"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tabControl {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  .tabControlItem {
    flex: 1;
    span {
      padding: 5px;
    }
    &.active {
      color: var(--color-high-text);
      span {
        border-bottom: 3px solid var(--color-tint);
      }
    }
  }
}
</style>
