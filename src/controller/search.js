const {createResponse} = require("../utils/createResponse");
const {getTimeStamp} = require("../utils/getTimeStamp");
const axios = require("axios");

const getHotKeywords = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const {session, token} = ctx.query;
    try {
        if (cookie && session && token) {
            const res = await axios.get('http://j.facerome.com/modules/article/toplist.php', {
                headers: {
                    "SESSIONID": session,
                    "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                    "Host": "j.facerome.com",
                    "Connextion": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Cookie": cookie,
                },
                params: {
                    order: 'postdata',
                    sortid: 0,
                    page: 1,
                    time: await getTimeStamp(),
                    "jieqi_token": token
                }
            })
            if (res.data.data.articlerows.length > 0) {
                ctx.body = await createResponse(200, "获取成功", res.data.data.articlerows);
            } else {
                ctx.body = await createResponse(501, "系统错误请稍后重试", "");
            }
        } else {
            ctx.body = await createResponse(500, "请重新登录账号");
        }
    } catch (e) {
        throw e;
    }
}

const getUserResult = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const {session, token, keyWord} = ctx.request.body;
    try {
        if (cookie && session && token && keyWord) {
            const res = await axios.get('http://j.facerome.com/userlist.php', {
                headers: {
                    "SESSIONID": session,
                    "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                    "Host": "j.facerome.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Cookie": cookie,
                },
                params: {
                    "groupid": 0,
                    "keyword": keyWord,
                    "keytype": "name",
                    "time": await getTimeStamp(),
                    "jieqi_token": token
                }
            })
            if (res.data.data.userrows[0].name === keyWord) {
                ctx.body = await createResponse(200, "获取成功", res.data.data.userrows[0])
            } else {
                ctx.body = await createResponse(501, "系统错误请稍后重试", "");
            }
        } else {
            ctx.body = await createResponse(500, "请重新登录账号", "");
        }
    } catch (e) {
        throw e;
    }
}

const getBookResult = async (ctx) => {

}

module.exports = {
    getHotKeywords,
    getUserResult,
    getBookResult
}