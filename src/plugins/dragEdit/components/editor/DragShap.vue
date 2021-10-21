<template>
  <div class="shape-wrap" :class="{ active: element === curComponent }"
       @click="stopClick" @mousedown="handleMouseDownOnShape">
    <div
      class="shape-point"
      v-for="(item, index) in (element === curComponent ? pointList : [])"
      @mousedown="handleMouseDownOnPoint(item, $event)"
      :key="index"
      :style="getPointStyle(item)">
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: '',
    components: {},
    props: {
      element: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'],
        cursors: {
          lt: 'nw-resize',
          t: 'n-resize',
          rt: 'ne-resize',
          r: 'e-resize',
          rb: 'se-resize',
          b: 's-resize',
          lb: 'sw-resize',
          l: 'w-resize',
        },
      }
    },
    mounted(){
      
    },
    computed: mapState([
      'curComponent',
    ]),
    methods: {
      stopClick(e) {
        e.stopPropagation();
        e.preventDefault();
        this.$store.commit('contexeMenuFlag', {show:false})
      },
      handleMouseDownOnShape(e) {
        if (this.element.component != 'w-text') {
          e.preventDefault()
        };
        e.stopPropagation();
        this.$store.commit('setCurComponent', { component: this.element})
      },
      getPointStyle(point) {
        const { width, height } = this.element.style;
        const hasT = /t/.test(point);
        const hasB = /b/.test(point);
        const hasL = /l/.test(point);
        const hasR = /r/.test(point);
        let newLeft = 0;
        let newTop = 0;
        if (point.length === 2) {
          newLeft = hasL ? 0 : width
          newTop = hasT ? 0 : height
        } else {
          if (hasT || hasB) {
            newLeft = width / 2
            newTop = hasT ? 0 : height
          }
          if (hasL || hasR) {
            newLeft = hasL ? 0 : width
            newTop = Math.floor(height / 2)
          }
        }
        const style = {
          marginLeft: hasR? '-4px' : '-4px',
          marginTop: '-4px',
          left: `${newLeft}px`,
          top: `${newTop}px`,
          cursor: this.cursors[point],
        }
        return style
      },
      handleMouseDownOnPoint(point, e) {
        const downEvent = window.event;
        downEvent.stopPropagation();
        downEvent.preventDefault();
        let startX = e.clientX;
        let startY = e.clientY;
        const { width, height } = this.element.style;
        document.onmousemove = (event) => {
          let X = event.clientX - startX;
          let Y = event.clientY - startY;
          this.$store.commit('setShapeStyle', {width: X + width, height: Y + height});
        }
        document.onmouseup = function(){
          document.onmousemove = document.onmouseup = null;
        };
      },
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .shape-wrap {
    position: absolute;
    &:hover {
      cursor: move;
    }
  }
  .active {
    outline: 1px solid $theme-color;
    user-select: none;
  }
  .shape-point {
    position: absolute;
    background: #fff;
    border: 1px solid $theme-color;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
</style>
