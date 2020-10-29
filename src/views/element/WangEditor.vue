<template>
  <div class="">
    <div id="editor">

    </div>
  </div>
</template>
<script>
  import E from 'wangeditor'
  export default {
    name: '',
    components: {},
    data() {
      return {
        editor: ''
      }
    },
    mounted() {
      this.editor = new E('#editor');
      this.editor.config.height = 500;
      this.editor.create();
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
 #editor{
   width: 80%;
   margin: 20px 0 0 10%;
 }
</style>
