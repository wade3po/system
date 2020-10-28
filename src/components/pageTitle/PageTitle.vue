<template>
  <div class="page-title">
    {{title}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    mounted(){
      this.title = document.title;
    },
    watch: {
      $route() {
        this.title = document.title;
      },
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
.page-title{
  position: fixed;
  z-index: 10;
  top: 60px;
  width: 100%;
  padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  background: $back-color;
}
</style>
