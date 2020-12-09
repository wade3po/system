<template>
  <div class="" :style="{height: height}">
    <p class="tip">
      <span>tip：图片太大会很卡，且容易崩溃，官网example也会，所以不建议处理像素太高的图片</span>
      <a href="http://nhn.github.io/tui.image-editor/latest/tutorial-example01-includeUi" target="_blank" class="btn-text">去试试</a>
    </p>
    <div id="tui-image-editor"></div>
  </div>
</template>
<script>
  import ImageEditor from 'tui-image-editor'
  import 'tui-image-editor/dist/tui-image-editor.css'
  import 'tui-color-picker/dist/tui-color-picker.css'
  import {whiteTheme} from "../../plugins/ImageEditor/theme";
  import 'file-saver'
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    mounted() {
      var instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
        includeUI: {
          theme: whiteTheme,
          initMenu: 'filter',
          menuBarPosition: 'bottom'
        },
        cssMaxWidth: 700,
        cssMaxHeight: 500,
      });
    },
    computed: {
      height() {
        return window.innerHeight  - 180+ 'px'
      },
    },
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .tip{
    line-height: 50px;
    text-indent: 20px;
    a{
      margin-left: 10px;
    }
  }
</style>
