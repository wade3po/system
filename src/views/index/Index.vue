<template>
  <div class="">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
  import {test} from "../../api/common/common";

  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    mounted(){
      // test()
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>

</style>