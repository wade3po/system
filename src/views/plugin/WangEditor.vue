<template>
  <div class="">
    <div id="editor">

    </div>
    <div class="preview">
      <el-button type="primary" @click="preview">预览效果</el-button>
    </div>

    <el-dialog title="预览" class="w-dialg" :visible.sync="previewShow" width="50%">
      <div class="container">
        <div v-html="previewHtml"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import E from 'WangEditor'
  export default {
    name: '',
    components: {},
    data() {
      return {
        editor: '',
        previewHtml: '',
        previewShow: false
      }
    },
    mounted() {
      this.editor = new E('#editor');
      this.editor.config.height = 500;
      this.editor.config.zIndex = 20;
      this.editor.create();
    },
    methods: {
      preview(){
        this.previewHtml = this.editor.txt.html();
        this.previewShow = true;
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
 #editor{
   width: 80%;
   margin: 20px 0 0 10%;
 }
  .preview{
    margin-top: 20px;
    text-align: center;
  }
  .container{
    max-height: 600px;
    overflow-y: scroll;
  }
</style>
