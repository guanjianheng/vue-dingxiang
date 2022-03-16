<template>
<div>
  <h4>防疫指南：</h4>
  <div class="list">
        <div>
          <router-link to="/area">
            <img src="../../assets/images/wen.png" width="56px" alt="">
            <div>风险地区</div>
          </router-link>
        </div>
        <div>
          <router-link to="/hesuan">
            <img src="../../assets/images/hesuan.png" width="56px" alt="">
            <div>核酸检测</div>
          </router-link>
        </div>
        <div>
          <router-link to="/prevention">
            <img src="../../assets/images/wuzi.png" width="56px" alt="">
            <div>医疗物资</div>
          </router-link>
        </div>
        <div>
          <img src="../../assets/images/chuxing.png" width="56px" alt="">
          <div>出行政策</div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Guide'
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid #f5f5f5;
//   border-top: 0.2rem solid #f5f5f5;
   div {
    flex: 1;
    text-align: center;
    color: #666;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
h4 {
    border-left: 5px solid blue;
    margin-left: 9px;
    padding-left: 4px;
    margin-bottom: 5px;
    // padding-bottom: 4px;
    // border-bottom: 1px solid rgb(194, 188, 188);
}
</style>