<template>
  <div class="layout">
    <el-container>
      <el-header class="header-wrap">
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <Aside></Aside>
        </el-aside>
        <el-main class="main-wrap">
<!--          <div class="page-title-wrap">-->
<!--            <PageTitle></PageTitle>-->
<!--          </div>-->
          <div class="router-wrap" :style="{maxHeight: height}">
            <transition name="fade-transform" mode="out-in">
              <router-view/>
            </transition>
          </div>
          <el-footer class="foot-wrap">
            Copyright ©️ 2020-2020，code 版权所有. <a href="http://beian.miit.gov.cn">闽ICP备2020020205号</a>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Head from '@/components/head/Head'
  import Aside from '@/components/aside/Aside'
  import PageTitle from '@/components/pageTitle/PageTitle'
  export default {
    name: '',
    components: {Head, Aside, PageTitle},
    data() {
      return {
        transitionName: 'left-enter'
      }
    },
    computed: {
      height() {
        return window.innerHeight - 120 + 'px'
      },
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'right-enter' : 'left-enter'
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .main-wrap{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 0;
    background: #fff;
  }
  .header-wrap{
    height: 80px !important;
  }
  .foot-wrap{
    height: 40px !important;
    line-height: 40px;
    text-align: center;
    background: $back-color;
  }
  .router-wrap{
    flex: 1;
    overflow-y: scroll;
  }
  .page-title-wrap{
    height: 40px;
  }
  .layout {
    display: flex;
    width: 100%;
    min-height: 100%;
  }
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
