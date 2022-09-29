const {createResponse} = require("../utils/createResponse");
const {getTimeStamp} = require("../utils/getTimeStamp");
const axios = require("axios");
const getBookDetail = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token, bookId } = ctx.query;
    try {
        if (cookie && session && token){
            const res = await axios.post('http://j.facerome.com/modules/article/articleinfo.php',{
                "id": bookId,
                "time": await getTimeStamp(),
                "jieqi_token": token
            }, {
                "SESSIONID": session,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                "Cookie": cookie,
                "Content-Type": "application/json"
            })

            if (res.data.data.articlevals.articleid === parseInt(bookId)){
                ctx.body = await createResponse(200, "获取成功", res.data.data.articlevals);
            }else {
                ctx.body = await createResponse(501, "系统错误请稍后重试", "");
            }
        }else {
            ctx.body = await createResponse(500, "请重新登录账号", "");
        }
    }catch (e) {
        throw e;
    }
}

module.exports = { getBookDetail }