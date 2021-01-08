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
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        copyContent: ''
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
  padding: 20px;
  .copy-input{
    width: 300px;
    margin-right: 20px;
  }
}
</style>
