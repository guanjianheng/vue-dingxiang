<template>
  <div class="data">
      <div class="content">
        <h4 style="font-size: 13px" class="title">截至北京时间 {{ covData.modifyTime | timeTransform}} </h4>
        <div class="data-list">
          <div class="list">
            较昨日<span class="red">{{ covData.currentConfirmedIncr | compare }}</span>
            <div class="bold red">{{ covData.currentConfirmedCount }}</div>
            <strong>现存确诊</strong>
          </div>
          <div class="list">
            较昨日<span class="orange">{{ covData.yesterdaySuspectedCountIncr | compare }} </span>
            <div class="bold orange">{{ covData.suspectedCount }}</div>
            <strong>境外输入</strong>
          </div>
          <div class="list">
            较昨日<span class="brown">{{ covData.seriousIncr | compare}} </span>
            <div class="bold brown">{{ covData.seriousCount }}</div>
            <strong>现存无症状</strong>
          </div>
          <div class="list">
            较昨日<span class="crimson">{{ covData.confirmedIncr | compare}} </span>
            <div class="bold crimson">{{ covData.confirmedCount }}</div>
            <strong>累计确诊</strong>
          </div>  
          <div class="list">
            较昨日<span class="skyblue">{{ covData.deadIncr | compare}} </span>
            <div class="bold skyblue">{{ covData.deadCount }}</div>
            <strong>累计死亡</strong>
          </div>
          <div class="list">
            较昨日<span class="green">{{ covData.curedIncr | compare}} </span>
            <div class="bold green">{{ covData.curedCount }}</div>
            <strong>累计治愈</strong>
          </div>                                                
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['covData'],
    filters: {
        compare(val) {
            val = val > 0 ? '+' + val : val;           //判断需要加号还是减号
            return val
        },
        timeTransform(time) {
            time = new Date().toLocaleString("chinese", { hour12: false })
            return time
        }
    }
}
</script>

<style lang="less" scoped>
.data {
  background: #f5f5f5;
  padding-top: 0.3rem;
  .content {
      background-color: #fff;
      border-radius: 0.2rem;
      .title {
          padding: 0.2rem;
          color: #666;
          margin-bottom: 2px;
      }
      .data-list {
          display: flex;
          justify-content: center;
          width: 100%;
          flex-wrap: wrap;
          border-radius: 0.1rem;
          box-shadow: 0 0 3px 3px rgba(241, 239, 239, 0.2);
          .list {
            width: 32.9%;
            text-align: center;
            // margin-bottom: 0.1rem;
            padding: 0.2rem 0 ;
            border: 0.01rem solid rgb(236, 234, 234) ;
            border-bottom: 0;
            border-radius: 2.5px;
            color: #555;
            .red {
                color: red;
            }
            .orange {
                color: orange;
            }
            .brown {
                color: brown;
            }
            .crimson {
                color: crimson;
            }
            .skyblue {
                color: skyblue;
            }
            .green {
                color: green;
            }
            .bold {
                font-weight: bold;
            }
            strong {
                color: #333;
            }
          }
      }
  }
}
</style>
