<template>
  <div class="home">
    <img src="../../assets/images/top.png" width="100%" alt="">
    <!-- 病毒信息，疫情热点 -->
    <CovInfo :covDesc='covDesc' :news='news' />
    <!-- 防疫指南 -->
    <Guide />
    <!-- 疫情数据 -->
    <CovData :covData='covData' />
    <!-- 中国地图 -->
    <ChinaMap />
    <!-- 世界地图 -->
    <WorldMap />
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo.vue'
import Guide from '../Guide/Guide.vue'
import CovData from './CovInfo/CovData.vue'
import ChinaMap from './Echarts/ChinaMap.vue'
import WorldMap from './Echarts/WorldMap.vue'

import api from '../../api/index'

export default {
  name: 'Home',
  data() {
    return {
      covDesc: {},
      news: [],
      covData: {}
    }
  },
  components: {
    CovInfo,
    CovData,
    ChinaMap,
    WorldMap,
    Guide
  },
  created() {
    api.getCovInfo()
    .then(res => {
      console.log('获取疫情数据', res.data);
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
      //全国疫情数据统计信息
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,  //现存确诊人数
        confirmedCount: data.confirmedCount,        //	累计确诊人数
        suspectedCount: data.suspectedCount,        //	累计境外输入人数
        curedCount: data.curedCount,              //累计治愈人数
        deadCount: data.deadCount,                //累计死亡人数
        seriousCount: data.seriousCount,         //现存无症状人数
        suspectedIncr: data.suspectedIncr,        //新增境外输入人数
        currentConfirmedIncr: data.currentConfirmedIncr,        //相比昨天现存确诊人数
        confirmedIncr: data.confirmedIncr,          //	相比昨天累计确诊人数
        curedIncr: data.curedIncr,                //	相比昨天新增治愈人数
        deadIncr: data.deadIncr,                //相比昨天新增死亡人数
        seriousIncr: data.seriousIncr,          //相比昨天现存无症状人数
        modifyTime: data.modifyTime,            //时间
        yesterdaySuspectedCountIncr: data.yesterdaySuspectedCountIncr  //相比昨天境外输入确诊人数
      }
    })
  }
}
</script>


<style lang="less" scoped>
</style>