<template>
  <div class="head">
    <img src="../../assets/images/logo.png" class="logo" alt="">
    <div>
      用户
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    created() {

    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .head{
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(31, 93, 145, 0.3);
  }
  .logo{
    height: 50px;
    margin-left: 15px;
  }
</style>
