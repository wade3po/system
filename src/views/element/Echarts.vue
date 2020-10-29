<template>
  <div class="echarts-wrap w-pb20">
      <div class="item" v-for="(val, index) in 8" :id="'echarts' + index"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import echartsOptions from '@/assets/mock/echarts'
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    mounted() {
      for (let i = 0; i < 8; i++) {
        var myChart = echarts.init(document.getElementById('echarts' + i));
        myChart.setOption(echartsOptions[i]);
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .echarts-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item{
      width: 600px;
      height: 400px;
      margin-top: 20px;
      border: solid 1px $border-color;
    }
  }
</style>
