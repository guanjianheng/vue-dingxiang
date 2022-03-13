<template>
  <div class="home">
    <!-- 顶部图片 -->
    <img src="../assets/images/1.png" width="100%" alt="">
    <CovInfo :covDesc='covDesc' :news='news' />
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import api from '../api/index'

export default {
  name: 'Home',
  data() {
    return {
      covDesc: {},
      news: []
    }
  },
  components: {
    CovInfo
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

