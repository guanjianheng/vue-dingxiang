<template>
  <div>
      <h3>国内疫情地图</h3>
      <div id="main" style="width: 7rem; height: 6rem"></div>
  </div>
</template>

<script>
// import api from '../../../api/index'          

export default {    
    mounted() {
        //获取疫情数据
        api.getChinaData()
        .then(res => {
            console.log('获取地图的数据', res.data);
            //获取省份数据
            let citys = res.data.retdata;
            let arr = [];
            for(let i = 0; i < citys.length ; i++) {
                let obj = {}
                obj.name = citys[i].xArea
                obj.value = citys[i].confirm    //累计确诊   curConfirm现存确诊
                arr.push(obj)
            };
            console.log('arr数据', arr);
             //显示地图
            this.$myChart.chinaMap('main', arr)
        })      
    },

}
</script>

<style lang="less" scoped>
.title {
    padding: 0.2rem;
}
</style>