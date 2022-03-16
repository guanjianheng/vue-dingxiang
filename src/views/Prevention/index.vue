<template>
    <div class="wuzi">
        <img src="../../assets/images/wuzi1.png" width="100%" alt="">
        <div class="wrapper">
            <van-tabs v-model="active" animated>
                <van-tab v-for="item in arr" :title="item.title" :key="item.title">
                    <img :src="item.img" width="100%" alt="">
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import img1 from '../../assets/images/jiujing.png'
import img2 from '../../assets/images/kouzhao.png'
import img3 from '../../assets/images/wendu.png'
import img4 from '../../assets/images/xishou.png'

export default {
    data() {
        return {
            active: 0,
            arr: [
                {
                    img: img1,
                    title: '酒精'
                },
                {
                    img: img2,
                    title: '口罩'
                },
                {
                    img: img3,
                    title: '温度计'
                },
                {
                    img: img4,
                    title: '洗手液'
                }
            ]
        }
    }
}
</script>