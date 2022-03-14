<template>
  <div class="home">
    <!-- 顶部图片 -->
    <img src="../../assets/images/top.png" width="100%" alt="">
    <CovInfo :covDesc='covDesc' :news='news' />
    <div class="box">
        <div>
          
            <img src="../../assets/images/wen.png" width="56px" alt="">
            <h5>免费问诊</h5>
          
        </div>
        <div>
          <router-link to="/hesuan">
            <img src="../../assets/images/hesuan.png" width="56px" alt="">
            <h5>核酸检测</h5>
          </router-link>
        </div>
        <div>
          <img src="../../assets/images/wuzi.png" width="56px" alt="">
          <h5>医疗物资</h5>
        </div>
        <div>
          <img src="../../assets/images/chuxing.png" width="56px" alt="">
          <h5>出行政策</h5>
        </div>
    </div>
    <CovData></CovData>
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import CovData from './CovInfo/CovData.vue'
import api from '../../api/index'

export default {
  name: 'Home',
  data() {
    return {
      covDesc: {},
      news: []
    }
  },
  components: {
    CovInfo,
    CovData
  },
  created() {
    api.getCovInfo()
    .then(res => {
      console.log(res.data);
      //病毒信息介绍
      let data = res.data.newslist[0].desc;
      this.covDesc = {
        note1: data.note1,
        note2: data.note2,
        note3: data.note3,
        remark1: data.remark1,
        remark2: data.remark2,
        remark3: data.remark3
      }
      //疫情热点
      this.news = res.data.newslist[0].news;
      console.log(this.news);
    })
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ;
  // margin-bottom: 5px;
  padding-bottom: 5px;
  color: #666;
  div {
    margin: 0 15px;
    h5 {
    text-align: center;
    }
  }  
}

</style>