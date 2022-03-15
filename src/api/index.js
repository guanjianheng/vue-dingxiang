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
    }
}

export default api 