<template>
    <div class="info">
        <div class="cov">
            <h3 class="title">病毒信息</h3>
            <p>{{ covDesc.note1 }}</p>
            <p>{{ covDesc.note2 }}</p>
            <p>{{ covDesc.note3 }}</p>
            <p>{{ covDesc.remark1 }}</p>
            <p>{{ covDesc.remark2 }}</p>
            <p>{{ covDesc.remark3 }}</p>
        </div>
        <div class="hot">
            <h3 class="title">
                <img src="../../../assets/images/hot.jpg" width="60px" alt="">
            </h3>
            <ul>
                <li v-for="item in news" :key="item.id">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        covDesc: {
            type: Object,
            default:function() {
                return {}
            }
        },
        news: {
            type: Array,
            default:function() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.info {
    padding: 0.2rem;
    .cov ,.hot {
        border-bottom: 0.5px solid ;
        margin-bottom: 5px;
        padding-bottom: 5px;
        color: #666;
    }  
    .title {
        border-left: 0.1rem solid rgb(20, 49, 128);
        padding-left: 0.1rem;
        margin-bottom: 0.2rem;
    }
    p {
        line-height: 0.4rem;
        color: #666;
    }
}
</style>