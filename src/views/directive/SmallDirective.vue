<template>
  <div class="">
    <ul>
      <li class="directive-list">
        <span>复制指令：</span>
        <el-input class="copy-input" v-model="copyContent" placeholder="请输入要复制的内容"></el-input>
        <el-button type="primary" v-copy="copyContent">复制</el-button>
      </li>
      <li class="directive-list">
        <span>防抖指令：</span>
        <el-button type="primary" v-debounce="debounce">防止重复提交</el-button>
      </li>
      <li class="directive-list" style="height: 150px">
        <span>拖拽指令：</span>
        <div v-draggable class="drag-wrap">请拖拽</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        copyContent: '',
        limitLen: ''
      }
    },
    methods: {
      debounce(val){
        this.$message({
          message: "提交成功",
          type: "success",
          duration: 2000
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .directive-list{
    display: flex;
    align-items: center;
    padding: 20px;
    .copy-input{
      width: 300px;
      margin-right: 20px;
    }
  }
  .drag-wrap{
    left: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background: $theme-color;
    color: #fff;
  }
</style>
