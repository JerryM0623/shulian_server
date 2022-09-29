const {orderList, sortList} = require('../data/requestType');
const {createResponse} = require("../utils/createResponse");
const axios = require("axios");
const {getTimeStamp} = require("../utils/getTimeStamp");

const getTypeDetail = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token, order, type } = ctx.query;
    try{
        if (order && type){
            // 检索对应的数据
            const { flag } = orderList.find(item => item.type === order);
            const { id } = sortList.find(item => item.type === type);
            if (cookie && session && token){
                const res = await axios.get('http://j.facerome.com/modules/article/toplist.php',{
                    headers: {
                        "SESSIONID": session,
                        "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                        "Host": "j.facerome.com",
                        "Connection": "Keep-Alive",
                        "Accept-Encoding": "gzip",
                        "Cookie": cookie,
                    },
                    params: {
                        "order": flag,
                        "sortid": id.toString(),
                        "page": "1",
                        "time": await getTimeStamp(),
                        "jieqi_token": token
                    }
                })
                console.log(res.data.data.articlerows)
            }else {
                ctx.body = await createResponse(500, "请重新登录账号", "");
            }
        }else {
            ctx.body = createResponse(500, "请求错误，请稍后重试");
        }
    }catch (e) {
        throw e;
    }
}

module.exports = {
    getTypeDetail
}