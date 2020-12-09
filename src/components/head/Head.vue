<template>
  <div class="head">
    <img src="../../assets/images/logo.png" class="logo" alt="">
    <div class="user">
      <el-dropdown @command="goTo">
        <span class="el-dropdown-link">
          WADE<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="0">GitHub</el-dropdown-item>
          <el-dropdown-item command="1">知乎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        urls: [
          'https://github.com/wade3po/system',
          'https://www.zhihu.com/people/wade-8-95/posts'
        ]
      }
    },
    methods:{
      goTo(index){
        window.open(this.urls[index]);
      }
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
    box-sizing: border-box;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(31, 93, 145, 0.3);
  }
  .logo{
    height: 50px;
  }
  .user{
    cursor: pointer;
  }
</style>
