const base = {
    host: 'http://api.tianapi.com',     //天行数据 --疫情病毒
    baseUrl: 'https://grnx.api.storeapi.netttt',    //挖数据--国内疫情
    covInfo: '/ncov/index?key=0a85356c4f1006507f9a5ca695cec468',    //疫情病毒信息
    chinaData: '/api/94/219?format=json&appid=14846&sign=67947e8c12b99a5c2d356ae4dd5e73ed',   //国内疫情接口
    worldData: '/api/94/220?format=json&appid=14846&sign=67947e8c12b99a5c2d356ae4dd5e73ed',          //国外疫情数据
    city: '/api/94/221',   //城市接口
}

export default base