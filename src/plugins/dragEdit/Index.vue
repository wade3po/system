<template>
  <div class="">
    <header>
      <el-button>预览</el-button>
      <el-button>保存</el-button>
      <el-button>清空</el-button>
    </header>
    <div class="content" :style="{height:height}">
      <div class="component-list">
        <ComponentsList></ComponentsList>
      </div>
      <div class="edit-wrap">
        <div class="canvas-wrap" id="canvasWrap" @dragover="handleDragOver"
          @click="deselectCurComponent">
          <Editor></Editor>
        </div>
      </div>
      <div class="attr-wrap"></div>
    </div>
  </div>
</template>
<script>
  import ComponentsList from './components/componentsList/Index.vue'
  import Editor from './components/editor/Index.vue'

  export default {
    name: '',
    components: {ComponentsList, Editor},
    data() {
      return {}
    },
    computed: {
      height() {
        return window.innerHeight - 173 + 'px'
      },
    },
    mounted() {
      
    },
    methods: {
      //拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
      handleDragOver(e) {
        e.preventDefault();
      },
      //取消选中元素
      deselectCurComponent() {
        this.$store.commit('setCurComponent', {component: null, zIndex: null});
        this.$store.commit('contexeMenuFlag', {show:false});
      },
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  header{
    padding: 10px;
    border-bottom: solid 1px $border-color;
  }
  .content{
    display: flex;
    .component-list{
      width: 200px;
    }
    .edit-wrap{
      flex: 1;
      background: $back-color;
      .canvas-wrap{
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        width: 375px;
        height: 667px;
        margin: 20px auto;
        background: #fff;
      }
    }
    .attr-wrap{
      width: 260px;
    }
  }
</style>
