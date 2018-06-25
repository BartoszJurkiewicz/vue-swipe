import Vue from 'vue'
import App from './App.vue'

Vue.directive('swipe', {
  bind: (el, binding, vnode) => {
    class Swipe {
      constructor () {
        this.startX = this.endX = this.startY = this.endY = 0
        this.minDistance = binding.value.minDistance
      }
      moveStart (e) {
        [this.startX, this.startY] = [e.screenX, e.screenY]
      }
      moveEnd (e) {
        [this.endX, this.endY] = [e.screenX, e.screenY]
        let dir
        if (this.endY < this.startY && this.startY - this.endY > this.minDistance) {
          dir = 'Up'
        } else if (this.endX > this.startX && this.endX - this.startX > this.minDistance) {
          dir = 'Right'
        } else if(this.endY > this.startY && this.endY - this.startY > this.minDistance) {
          dir = 'Down'
        } else if (this.endX < this.startX && this.startX - this.endX > this.minDistance) {
          dir = 'Left'
        }
        vnode.context.$emit(`swiped${dir}`)
      }
      init () {
        el.addEventListener('touchstart', e => { this.moveStart(e.touches[0]) }, false)
        el.addEventListener('mousedown', e => { this.moveStart(e) }, false)
        el.addEventListener('touchend', e => { this.moveEnd(e.changedTouches[0]) }, false)
        el.addEventListener('mouseup', e => {  this.moveEnd(e) }, false)
      }
    }
    const swipe = new Swipe(el)
    swipe.init()
  },
  unbind: (el) => {
    el.removeEventListener('touchstart')
    el.removeEventListener('mousedown')
    el.removeEventListener('touchend')
    el.removeEventListener('mouseup')
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
