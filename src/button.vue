<template>
  <!-- 单文件组件 -->
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
		<g-icon name='loading' class="loading icon" v-if="loading"></g-icon>
		<g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <slot></slot>
  </button>
</template>
<script>
import Icon from './icon'

export default {
  //   props: ["icon", "iconPosition"],
  components: {
    'g-icon': Icon
  },
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
<style lang="scss" scoped>
      $button-height: 32px;
      $font-size: 14px;
      $button-bg: white;
      $button-active-bg: #eee;
      $border-radius: 4px;
      $color: #333;
      $border-color: #999;
      $border-color-hover: #666;
@keyframes spin {
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
}
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  &:hover {
    // border-color: $border-color-hover;
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
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