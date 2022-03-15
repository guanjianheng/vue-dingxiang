import axios from 'axios'
import base from './base' 

const api = {
        //获取病毒信息
    getCovInfo() {
       return axios.get(base.host + base.covInfo)
    },
        //获取国内疫情数据
    getChinaData() {
        return axios.get(base.baseUrl + base.chinaData)
    },
        //获取世界疫情数据
    getWorldData() {
        return axios.get(base.baseUrl + base.worldData)
    }    
}

export default api 