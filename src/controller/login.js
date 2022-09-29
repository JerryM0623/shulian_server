const { createResponse } = require('../utils/createResponse');
const { getTimeStamp } = require('../utils/getTimeStamp');
const { parserCookies } = require('../utils/parserCookies');
const axios = require('axios');

const loginController = async (ctx) => {
    const { username, password } = ctx.request.body;
    try {
        if (username && password){
            // 请求官方服务器
            const res = await axios.get('http://j.facerome.com/login.php', {
                headers:{
                    "SESSIONID": "",
                    "user-agent": "Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                    "Host": "j.facerome.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                },
                params:{
                    username,
                    password,
                    usecookie: "1",
                    act: "login",
                    time: await getTimeStamp(),
                    "jieqi_token": ""
                }
            })
            if (res.data.data["jieqi_username"] && res.data.data["jieqi_useruname"]){
                // 解析并设置 cookie
                const cookieParserArray = await parserCookies(res.headers["set-cookie"]);
                // console.log(cookieParserArray)
                cookieParserArray.forEach(cookieObj => {
                    ctx.cookies.set(cookieObj.cookieName, cookieObj.cookieBody, {
                        path: cookieObj.path ? cookieObj.path : "/",
                        maxAge: cookieObj.maxAge ? cookieObj.maxAge : (60 * 60 * 1000),
                        expires: cookieObj.expires ? new Date(cookieObj.expires) : new Date(Date.now() + (60 * 60 * 1000)),
                    })
                })
                // 返回响应
                ctx.body = await createResponse(200, "登录成功", res.data.data);
            }else{
                ctx.body = await createResponse(501, "登录失败！请检查账号和密码！", "");
            }
        }else {
            ctx.body = await createResponse(500, "请输入账号和密码！", "");
        }
    }catch (e) {
        throw e;
    }
}

module.exports = { loginController }