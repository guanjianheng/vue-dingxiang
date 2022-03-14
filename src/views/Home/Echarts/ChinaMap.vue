<template>
  <div>
      <div class="title">国内疫情地图</div>
      <div id="main" style="width: 7rem; height: 6rem"></div>
  </div>
</template>

<script>
// import echarts from 'echarts'

export default {    
    mounted() {
        this.$myChart.chinaMap('main')
    },

}
</script>

<style lang="less" scoped>
.title {
    padding: 0.2rem;
}
</style>