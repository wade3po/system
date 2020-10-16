<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Head from '@/components/head/Head'
  import Aside from '@/components/aside/Aside'
  export default {
    name: '',
    components: {Head, Aside},
    data() {
      return {
        transitionName: 'left-enter'
      }
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