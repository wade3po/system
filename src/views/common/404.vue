<template>
  <div class="err-wrap">
    <p class="err-code">404</p>
    <div>
      <p class="title1">抱歉！</p>
      <p class="title2">当前页面不存在...</p>
      <p class="title3">请检查页面地址或点击下面按钮返回首页。</p>
      <el-button @click="toIndex" type="primary">返回首页</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toIndex(){
        this.$router.replace('/index');
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .err-wrap{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: $back-color;
    .err-code{
      margin: 200px 80px 0 0 ;
      font-size: 200px;
    }
    .title1{
      margin: 270px 0 10px 0;
      font-size: 35px;
      color: $theme-color;
    }
    .title2{
      font-size: 20px;
      color: #000;
    }
    .title3{
      margin: 5px 0 10px 0;
      font-size: 16px;
      color: #555;
    }
  }
</style>
