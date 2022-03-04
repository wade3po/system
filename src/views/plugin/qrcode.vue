<template>
  <div class="qrcode-wrap">
    <div class="form-item">
      <span class="title">二维码内容：</span>
      <el-input class="options" v-model="codeC"></el-input>
    </div>
    <div class="form-item">
      <span class="title">二维码宽：</span>
      <el-input class="options" v-model="codeW"></el-input>
    </div>
    <div class="form-item">
      <span class="title">二维码高：</span>
      <el-input class="options" v-model="codeH"></el-input>
    </div>
    <div class="form-item">
      <span class="title">LOGO：</span>
      <el-upload
        class="qrcode-uploader"
        action="#"
        :show-file-list="false"
        :on-change="handleChange"
        :auto-upload="false">
        <img v-if="logoUrl" :src="logoUrl" class="avatar">
        <span
          v-if="logoUrl"
          class="el-upload-list__item-delete"
          @click.stop="handleRemove()"
        >
          <i class="el-icon-delete"></i>
        </span>
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="form-item">
      <span class="title">LOGO宽：</span>
      <el-input class="options" v-model="logoW"></el-input>
    </div>
    <div class="form-item">
      <span class="title">LOGO高：</span>
      <el-input class="options" v-model="logoH"></el-input>
    </div>
    <p class="f12 mt5">tips：LOGO的大小建议不要太大，太大会导致二维码无法识别。只能添加jpg/png/jpeg文件。</p>
    <p class="f12 mt5">默认二维码：100x100；LOGO：30x30</p>
    <el-button type="primary" class="mt20 ml160" @click="createQrcode">生成二维码</el-button>
    <div ref="qrCodeUrl"></div>
    <div class="form-item">
      <el-button @click="downLoag('png')">PNG下载</el-button>
      <el-button @click="downLoag('png')">JPG下载</el-button>
    </div>
  </div>
</template>
<script>
  import QRCode from 'qrcodejs2'
  export default {
    name: '',
    components: {},
    data() {
      return {
        logoUrl: '',
        codeC: '',
        codeW: 100,
        codeH: 100,
        logoW: 30,
        logoH: 30,
        qrcode: ''
      }
    },
    mounted() {

    },
    methods: {
      handleChange(file) {
        if(file){
          this.logoUrl = URL.createObjectURL(file.raw);
        }
      },
      handleRemove(){
        this.logoUrl = '';
      },
      createQrcode(){
        if(this.qrcode){
          this.qrcode.clear();
          this.qrcode.makeCode(this.codeC ? this.codeC : '没输入内容', {
            width: this.codeW,
            height: this.codeH,
            colorDark: '#000',
            colorLight: '#fff',
          });
        }else{
          this.qrcode = new QRCode(this.$refs.qrCodeUrl, {
            text: this.codeC ? this.codeC : '没输入内容',
            width: this.codeW,
            height: this.codeH,
            colorDark: '#000',
            colorLight: '#fff',
          });
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .qrcode-wrap{
    width: 700px;
    margin: 20px auto;
    .form-item{
      display: flex;
      align-items: center;
      margin-top: 20px;
      .options{
        width: 280px;
      }
      .title{
        display: inline-block;
        width: 90px;
      }
    }
  }
  .ml160{
    margin-left: 160px;
  }
  .qrcode-upload{
    width: 280px;
    i{
      margin-top: 0px;
    }
  }
</style>
