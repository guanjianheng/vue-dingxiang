<template>
  <div class="box">
      <h4>国外疫情地图:</h4>
      <div id="worldMain" style="width: 7.5rem; height: 5.5rem"></div>            
  </div>
</template>

<script>
import api from '../../../api/index'

export default {
    mounted() {
        api.getWorldData()
        .then(res => {
            console.log('国外疫情数据', res.data);
            let world = res.data.retdata;
            let arr = [];   //累计确诊
            for(let i = 0; i < world.length ; i++) {
                let obj = {}
                obj.name = world[i].xArea
                obj.value = world[i].confirm    //累计确诊   curConfirm现存确诊
                arr.push(obj)
            }
        this.$myChart.worldMap('worldMain', arr)
        })
    }
}
</script>

<style lang="less" scoped>
.box {
    margin: 20px auto;
}
h4 {
    border-left: 5px solid blue;
    margin-left: 9px;
    padding-left: 4px;
    margin-bottom: 5px;
    // border-bottom: 1px solid rgb(194, 188, 188);
}
#worldMain {
    background-color: #f5f5f5;
}
</style>