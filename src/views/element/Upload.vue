<template>
  <div class="upload-wrap w-pb20">
    <el-upload
      class="upload-content"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false"
      :show-file-list="false"
      accept=".png,.jpg,.jpeg"
      :on-change="handleChange"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过10M</div>
    </el-upload>
    <div class="operate-wrap">
      <el-button type="primary" @click="clearFileList">清空列表</el-button>
      <el-button type="primary" @click="upload" v-loading.fullscreen.lock="fullscreenLoading"
                 element-loading-text="上传中">上传
      </el-button>
    </div>
    <ul class="upload-list">
      <li v-for="val in fileList" :key="val.uid">
        <div class="img-wrap">
          <el-image
            :src="val.url"
            class="upload-img"
            :preview-src-list="srcList">
          </el-image>
        </div>
        <p class="img-name">{{val.name}}</p>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
        srcList: [],
        haveLimitSize: false,
        selectImgEnd: false,
        fullscreenLoading: false
      }
    },
    methods: {
      handleClick() {
        this.$refs.input.click();
      },
      handleChange(file) {
        let limitSize = 1024 * 1024 * 10;
        if (file.size > limitSize) {
          if (!this.haveLimitSize) {
            this.haveLimitSize = true;
          }
        } else {
          file.url = URL.createObjectURL(file.raw);
          this.srcList.push(file.url);
          this.fileList.push(file);
        }
        if (!this.selectImgEnd) {
          this.selectImgEnd = true;
          setTimeout(() => {
            if (this.haveLimitSize) {
              this.$message({
                message: "有图片超过10M，大于10M已经自动为您过滤",
                type: "error",
                duration: 4000,
              });
            }
            this.selectImgEnd = false;
            this.haveLimitSize = false;
          }, 500)
        }
      },
      clearFileList() {
        this.srcList = [];
        this.fileList = [];
      },
      upload() {
        if (!this.fileList.length) {
          this.$message({
            message: "请选择要上传的图片",
            type: "error",
            duration: 2000,
          });
          return;
        }
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$message({
            message: "上传成功",
            type: "success",
            duration: 4000,
          });
        }, 2000)
        return
        for (let i = 0; i < this.fileList.length; i++) {
          let item = this.fileList[i];
          let formData = new FormData();
          formData.append("file", item.raw);
          formData.append("name", item.name);
          addGallery(formData).then((res) => {

          });
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .upload-content {
    width: 600px;
    height: 300px;
    margin: 50px auto;
  }

  .upload-list {
    display: flex;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 200px;
      height: 200px;
      margin: 20px 0 0 20px;
      border: solid 1px $border-color;
    }

    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      margin-top: 20px;
      border: solid 1px $border-color;

      .upload-img {
        width: auto;
        max-height: 120px;
        max-width: 120px;
      }
    }

    .img-name {
      width: 160px;
      margin: 20px;
      @include line-clamp(1);
      text-align: center;
    }
  }

  .operate-wrap {
    text-align: center;
  }
</style>
