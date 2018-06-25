<template>
  <div id="app">
    <swipe-wrapper class="carousel-container" @swipedUp="handleSwipe('up')" @swipedRight="handleSwipe('right')" @swipedLeft="handleSwipe('left')" @swipedDown="handleSwipe('down')">
      <div class="carousel" :style="`transform: translateX(${index * (80 / 3)}vw)`">
        <card v-for="index in 10" :key="index" />
      </div>
    </swipe-wrapper>
  </div>
</template>

<script>
import SwipeWrapper from './components/SwipeWrapper'
import Card from './components/Card'

export default {
  name: 'app',
  components: { SwipeWrapper, Card },
  data: () => {
    return {
      index: 0
    }
  },
  methods: {
    handleSwipe (dir) {
      switch(dir) {
        case 'left':
          if (this.index > -7) this.index--
          break
        case 'right':
          if (this.index < 0) this.index++
          break
        case 'up':
          alert('Swiped up!')
          break
        case 'down':
          alert('Swiped down!')
          break
      }
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
}
.carousel-container {
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
}
.carousel {
  display: flex;
  transition: .4s;
}
</style>
