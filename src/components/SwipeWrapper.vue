<template>
  <div class="swipe-wrapper" v-swipe="{minDistance: 100}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwipeWrapper'
}
</script>
