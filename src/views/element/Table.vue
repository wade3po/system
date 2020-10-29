<template>
  <div>
    <SearchWrap @resetSearch="resetSearch" @search="search">
      <el-form
        ref="searchForm"
        :model="searchForm"
        label-position="right"
        label-width="120px"
        class="w-search-form"
      >
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="searchForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="介绍：" prop="desc">
          <el-input v-model="searchForm.desc" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="地址：" prop="address">
          <el-input v-model="searchForm.address" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="日期：" prop="time" class="date-input">
          <el-date-picker
            v-model="searchForm.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </SearchWrap>

    <el-row class="w-operate-wrap">
      <el-button type="primary" @click="handelAddEdit(1)">新增</el-button>
    </el-row>

    <div class="w-table">
      <el-table
        :data="tableData"
        :height="height">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          width="100px"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="头像">
          <template slot-scope="scope">
            <el-tooltip placement="right" effect="light">
              <div slot="content">
                <div class="preview-img">
                  <img src="../../assets/images/avatar.jpg" alt />
                </div>
              </div>
              <img src="../../assets/images/avatar.jpg" alt="" class="table-img">
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          prop="desc"
          align="center"
          width="100px"
          show-overflow-tooltip
          label="介绍">
        </el-table-column>
        <el-table-column
          prop="address"
          align="center"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          sortable
          label="日期">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handelAddEdit(0,scope.row, scope.$index)">编辑</el-button>
            <el-button type="text" @click="handelDel(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :total="total" :page="page" @handle-currentChange="getTable" @handle-sizeChange="getTable"></Pagination>
    <el-dialog :title="addEditType ? '新增' : '编辑'" class="w-dialg" :visible.sync="addEditShow" width="500px">
      <div class="container">
        <el-form ref="addEditForm" :model="addEditForm" label-position="right" label-width="100px"
                 :rules="addEditForm">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="addEditForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="介绍：" prop="desc">
            <el-input v-model="addEditForm.desc" type="textarea" rows="5" placeholder="请输入介绍"></el-input>
          </el-form-item>
          <el-form-item label="地址：" prop="address">
            <el-input v-model="addEditForm.address" placeholder="请输入地址"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addEditShow = false">取 消</el-button>
        <el-button type="primary" @click="addEditConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import verify from '@/utils/verify'
  import {formatDate} from '@/utils/index'
  export default {
    name: '',
    components: {},
    data() {
      return {
        tableData: [],
        addEditShow: false,
        addEditForm: {
          name: '',
          address: '',
          desc: '',
        },
        addEditFormRules: {
          name: [{ required: true, message: "请输入姓名", trigger: "blur"}, verify(name)],
          address: [{ required: true, message: "请输入地址", trigger: "blur"}],
          desc: [{ required: true, message: "请输入介绍", trigger: "blur" },
            { max: 30, message: "不超过30字", trigger: "blur" },],
        },
        searchForm: {
          name: '',
          address: '',
          desc: '',
          time: '',
        },
        addEditType: 1,
        editIndex: 0,
        total: 100,
        page: {
          page: 1,
          pageSize: 10
        }
      }
    },
    computed: {
      height() {
        return window.innerHeight - 300
      },
    },
    mounted() {
      for (let i = 0; i < 20; i++) {
        this.tableData.push({
          date: '2020-10-09 15:26:' + (i + 10),
          name: '王小虎' + i,
          address: '上海市普陀区金沙江路 1518 弄',
          desc: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
        })
      }
    },
    methods: {
      //搜索
      search() {

      },
      //重置
      resetSearch() {
        this.$refs.searchForm.resetFields();
      },
      getTable(){
        console.log(this.page)
      },
      handelAddEdit(type, row, editIndex) {
        this.addEditType = type;
        this.addEditShow = true;
        if(type){
          this.addEditForm = {
            name: '',
            address: '',
            desc: '',
          }
        }else{
          this.addEditForm = row;
          this.editIndex = row;
        }
      },
      addEditConfirm() {
        if(this.addEditType){
          this.addEditForm.date = formatDate(new Date().getTime())
          this.tableData.unshift(this.addEditForm)
        }else{
          this.$set(this.tableData, this.editIndex, this.addEditForm)
        }
        this.addEditShow = false;
      },
      handelDel(index) {
        this.$confirm('是否确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>

</style>
