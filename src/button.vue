<template>
  <!-- 单文件组件 -->
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
		<g-icon v-if="icon" :name="icon"></g-icon>
    <slot></slot>
  </button>
</template>
<script>
export default {
  //   props: ["icon", "iconPosition"],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
			// 属性检查器
			validator (value) {
				return value === 'left' || value==='right'
			}
    },
  },
};
</script>
<style lang="scss">
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: -1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>