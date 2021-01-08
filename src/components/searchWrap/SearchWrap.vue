<template>
  <div class="search-wrap" ref="operate" :class="isShow ? 'pad0' : ''">
    <slot></slot>
    <div class="hold" :class="isShow && isHoldActive && needShow ? 'hold-active' : ''"></div>
    <div class="operate">
      <el-button size="small" @click="resetSearch">重置</el-button>
      <el-button type="primary" @click="search" size="small">搜索</el-button>
      <template v-if="needShow">
        <el-button type="text" class="btn-text" v-show="!isShow" @click="showSearch">
          展开
          <i class="el-icon-arrow-down"></i>
        </el-button>
        <el-button type="text" class="btn-text" v-show="isShow" @click="showSearch">
          收起
          <i class="el-icon-arrow-up"></i>
        </el-button>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        needShow: false, //是否需要展开收起
        isShow: true, //展开收起控制
        isHoldActive: false, //是否需要加高
        showIndex: 0, //初始化显示个数
        childrenEl: "",
      };
    },
    mounted() {
      let parentEl = this.$refs.operate;
      let wrapWidth = parentEl.clientWidth;
      this.childrenEl = this.$refs.operate.children[0].children;
      let itemWidth = 0;
      for (let i = 0; i < this.childrenEl.length; i++) {
        itemWidth += this.childrenEl[i].clientWidth;
        if (itemWidth > wrapWidth - 200) {
          this.showIndex = i;
          break;
        }
      }
      this.showIndex =
        this.showIndex == 0 ? this.childrenEl.length : this.showIndex;
      if (this.childrenEl.length > this.showIndex) {
        this.needShow = true;
        this.showSearch();
      }
      //监听enter键盘事件搜索
      let inputList = document.querySelectorAll(".search-wrap input");
      inputList.forEach((el) => {
        if (el.className == "el-input__inner") {
          el.addEventListener("keydown", (e) => {
            if (window.event.keyCode == 13) {
              this.search();
            }
          });
        }
      });
    },
    methods: {
      showSearch() {
        this.isShow = !this.isShow;
        let show = this.isShow ? "flex" : "none";
        let parentEl = this.$refs.operate;
        let wrapWidth = parentEl.clientWidth;
        let childrenEl = parentEl.children[0].children;
        for (let i = this.showIndex; i < this.childrenEl.length; i++) {
          this.childrenEl[i].style.display = show;
        }
        let itemWidth = 0;
        for (let i = 0; i < this.showIndex + 1; i++) {
          itemWidth += this.childrenEl[i].clientWidth;
        }
        this.isHoldActive =
          childrenEl.length % (this.showIndex + 1) == 0
            ? itemWidth > wrapWidth - 200
            : false;
      },
      resetSearch() {
        if (this.$parent.page) {
          this.$parent.page.page = 1;
        }
        this.$emit("resetSearch");
      },
      search() {
        if (this.$parent.page) {
          this.$parent.page.page = 1;
        }
        this.$emit("search");
      },
    },
  };
</script>
<style lang="scss" scoped>
  .search-wrap {
    overflow: auto;
    position: relative;
    margin-bottom: 20px;
    padding: 20px 200px 0 0;
    background: #fff;
  }
  .hold {
    width: 200px;
    height: 1px;
  }
  .hold-active {
    height: 32px;
    margin-bottom: 20px;
  }
  .pad0 {
    padding-right: 0;
  }
  .operate {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 22px;
    width: 200px;
    height: 32px;
    line-height: 32px;
    justify-content: flex-end;
    text-align: right;
  }
</style>
