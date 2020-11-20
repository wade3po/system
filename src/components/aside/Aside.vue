<template>
  <div class="aside">
    <el-menu :default-active="currentIndex" :collapse-transition="false"
             class="el-menu-vertical-demo" :router="true">
      <template v-for="val in navList">
        <el-submenu v-if="val.children" :index="val.path" :key="val.path">
          <template slot="title">
            <span slot="title">{{val.name}}</span>
          </template>
          <el-menu-item-group v-for="item in val.children" :key="item.path">
            <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="val.path" :key="val.path">
          {{val.name}}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {navList} from './menu.js'
  export default {
    name: '',
    components: {},
    data() {
      return {
        currentIndex: '',
        navList: navList
      }
    },
    created(){
      this.currentIndex = this.$route.path;
    },
    methods: {

    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .aside{
    position: fixed;
    left: 0;
    width: 250px;
    min-height: 100%;
    background: #fff;
  }
</style>
