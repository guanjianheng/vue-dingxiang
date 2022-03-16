<template>
  <div class="box">
      <h4>国内疫情地图:</h4>
      <div class="tabs">
          <div class="tab" :class="{ 'active': leftShow }" @click="changeLeftTab">累计确诊</div>
          <div class="tab" :class="{ 'active': rightShow }" @click="changeRightTab">现存确诊</div>
      </div>
      <!-- 累计确诊 -->
      <div v-show="leftShow"  id="main" style="width: 7.5rem; height: 7.5rem"></div>       
      <!-- 现存确诊 -->
      <div v-show="rightShow"  id="nowMain" style="width: 7.5rem; height: 7.5rem"></div>    
  </div>
</template>

<script>
import api from '../../../api/index'          

export default {    
    data() {
        return {
            leftShow: true,
            rightShow: false,
        }
    },
    methods: {
        changeLeftTab() {
            if(this.leftShow === false && this.rightShow === true) {
                this.leftShow = true
                this.rightShow = false
            }
        },
        changeRightTab() {
            if(this.rightShow === false && this.leftShow === true) {
                this.rightShow = true
                this.leftShow = false
            }
        }
    },
    mounted() {
        //获取疫情数据
        api.getChinaData()
        .then(res => {
            console.log('获取地图的数据', res.data);
            //获取省份数据
            let citys = res.data.retdata;
            let arr = [];   //累计确诊
            let nowArr = [];    //现存确诊
            for(let i = 0; i < citys.length ; i++) {
                let obj = {}
                obj.name = citys[i].xArea
                obj.value = citys[i].confirm    //累计确诊   curConfirm现存确诊
                let now = {}
                now.name = citys[i].xArea
                now.value = citys[i].curConfirm
                arr.push(obj)
                nowArr.push(now)
            };
            console.log('arr数据', arr);
             //显示累计的地图
            this.$myChart.chinaMap('main', arr)
            //显示现存的地图
            this.$myChart.chinaMap('nowMain', nowArr)
        })      
    },

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
    // padding-bottom: 4px;
    // border-bottom: 1px solid rgb(194, 188, 188);
}
.tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    // border-top: 1px solid rgb(194, 188, 188);
    .tab {
        width: 2rem;
        height: 0.26rem;
        line-height: 0.26rem;
        text-align: center;
        padding: 0.25rem;
        background: #f5f5f5;
        color: rgb(48, 53, 41);
        border-radius: 0.8rem;
    }
}
#main ,#nowMain {
    background-color: #f1f1f1;
}
.active {
    background-color: rgba(156, 206, 228, 0.767) !important;
}
</style>