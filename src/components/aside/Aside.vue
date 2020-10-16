<template>
  <div class="aside">
    <el-menu :default-active="currentIndex" :collapse-transition="false" 
             class="el-menu-vertical-demo" :router="true">
      <template v-for="val in navList">
        <el-submenu v-if="val.children" :index="val.path" :key="val.path">
          <template slot="title">
            <span slot="title">{{val.name}}</span>
          </template>
          <el-menu-item-group v-for="item in val.children">
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
  export default {
    name: '',
    components: {},
    data() {
      return {
        currentIndex: '',
        navList: [
          {
            name: '首页',
            path: '/index'
          },
          {
            name: '404',
            path: '/a'
          },
          {
            name: '401',
            path: '/b'
          },
          {
            name: '错误',
            path: '/error',
            children: [
              {
                name: '404',
                path: '/404'
              },
              {
                name: '401',
                path: '/401'
              }
            ]
          }
        ]
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
    min-height: 100%;
    background: #fff;
  }
</style>