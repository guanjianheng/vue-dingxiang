import axios from 'axios'
import base from './base' 

import md5 from 'md5-js'

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
    },
    getCity(city_name) {
        //md5加密规则 sign = MD5( appid1city_name武汉formatjsontime1545829466密钥) 查看加密规则说明 密钥不需要键名，请直接跟上32位的密钥
        let rules = md5('appid14846city_name' + city_name + 'formatjson58638ceda8aff46716fc256b78d5420c')
        let canshu = 'format=json&city_name='+ city_name + 'appid=14846&sign=' + rules
        return axios.get(base.baseUrl + base.city + '?' + canshu)
    }
}

export default api 