<template>
  <div>
      <img src="../../assets/images/area.png" width="100%" alt="">
      <div class="content">
          <h3>高风险地区({{ high.length }}个):</h3> 
          <div v-if="high.length > 0" class="title">
              <ul>
                  <li v-for="(item, index) in high" :key="index">
                      {{ index+1 + '、' + item }}
                  </li>
              </ul>
          </div>
            <br />
          <h3>中风险地区({{ mid.length }}个):</h3>
          <div v-if="high.length > 0" class="title">
              <ul>
                  <li v-for="(item, index) in mid" :key="index">
                      {{ index+1 + '、' + item }}
                  </li>
              </ul>              
          </div>
      </div>
  </div>
</template>

<script>
import api from '../../api/index'

export default {
    data() {
        return {
            high: [],   //高风险地区
            mid: []     //中风险地区
        }
    },
  created() {
      api.getCovInfo()
      .then(res => {
          console.log(res.data.newslist[0]);
          let riskarea = res.data.newslist[0].riskarea
          this.high = riskarea.high
          this.mid = riskarea.mid
      })
  },
}
</script>

<style lang="less" scoped>

</style>
