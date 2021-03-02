<template>
  <!-- 单文件组件 -->
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
		<g-icon name='loading' class="loading icon" v-if="loading"></g-icon>
		<g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <slot></slot>
  </button>
</template>
<script>
export default {
  //   props: ["icon", "iconPosition"],
  props: {
    icon: {},
		loading: {
			type:Boolean,
			default:false
		},
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
@keyframes spin {
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
}
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
    // border-color: var(--border-color-hover);
    border-color:red;
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
    // order: 0;
    margin-right: 0.1em;
  }
  &.icon-right {
		 > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
	.loading {
		animation: spin 1s infinite linear;
	}
}
</style>