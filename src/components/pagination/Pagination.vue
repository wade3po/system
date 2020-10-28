<template>
  <div class="page-wrap">
    <el-pagination
      :background="background"
      @size-change="handleSizeChange"
      :page-size.sync="page.pageSize"
      @current-change="handleCurrentChange"
      :current-page.sync="page.page"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
    ></el-pagination>
    <el-button type="button" size="mini" class="confirm-btn" style="margin: 0px 5px">确定</el-button>
  </div>
</template>
<script>
  export default {
    props: {
      total: {
        type: Number,
        default: 0
      },
      page: {
        type: Object,
        required: true
      },
      pageSizes: {
        type: Array,
        default: function() {
          return [10, 20, 30, 50, 100];
        }
      },
      layout: {
        type: String,
        default: "total, sizes, prev, pager, next, jumper"
      },
      background: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      handleCurrentChange() {
        this.$emit("handle-currentChange");
      },
      handleSizeChange() {
        this.$emit("handle-sizeChange");
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
.page-wrap{
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}
</style>
