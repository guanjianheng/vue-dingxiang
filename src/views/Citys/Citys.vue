<template>
  <div>
      <h1>该页面功能未实现！</h1>
      <h2>  城市:{{ cityname }}</h2>
      <div id="city" style="width: 7.5rem; height: 9rem"></div>            
  </div>
</template>

<script>
import api from '../../api/index'

export default {
    props: ['cityname'],
    mounted() {
        this.$myChart.cityMap('city', this.cityname, [])
        api.getCity(this.cityname)
        .then(res => {
            console.log('城市数据', res.data);
        })
    }
}
</script>

<style>

</style>