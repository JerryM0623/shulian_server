const { indexPageRequest } = require('../request/indexPageRequest');
const {createResponse} = require("../utils/createResponse");
const {getTimeStamp} = require("../utils/getTimeStamp");
const axios = require("axios");

const getSwiperList = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token } = ctx.query;
    try {
        if (cookie && session && token){
            // 请求官方服务器
            const res = await indexPageRequest(session, token, cookie);
            if (res.data.data["jieqi_pageblocks"]["22"].title){
                ctx.body = await createResponse(200, "获取成功", res.data.data["jieqi_pageblocks"]["22"])
            }else{
                ctx.body = await createResponse(501, "系统错误请稍后重试", "");
            }
        }else {
            ctx.body = await createResponse(500, "请重新登录账号", "");
        }
    }catch (e) {
        throw e;
    }
}

const getRecommendList = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token } = ctx.query;
    try {
        if (cookie && session && token){
            // 请求官方服务器
            const res = await indexPageRequest(session, token, cookie);
            if (res.data.data["jieqi_pageblocks"]["21"].title){
                const data = res.data.data["jieqi_pageblocks"]["21"];
                data.title = "潜力好书";
                ctx.body = await createResponse(200, "获取成功", data);
            }else{
                ctx.body = await createResponse(501, "系统错误请稍后重试", "");
            }
        }else {
            ctx.body = await createResponse(500, "请重新登录账号", "");
        }
    }catch (e) {
        throw e;
    }
}

const getLastUpdate = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token } = ctx.query;
    try {
        if (cookie && session && token){
            const res = await axios.get('http://j.facerome.com/modules/article/toplist.php', {
                headers: {
                    "SESSIONID": session,
                    "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                    "Host": "j.facerome.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Cookie": cookie,
                },
                params: {
                    "order": "lastupdate",
                    "sortid": "0",
                    "page": "1",
                    "time": await getTimeStamp(),
                    "jieqi_token": token
                }
            })
            if (res.data.data.articlerows.length > 0){
                ctx.body = await createResponse(200, "获取成功", res.data.data.articlerows);
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

const getTopRanking = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token } = ctx.query;
    try {
        if (cookie && session && token){
            const res = await axios.get('http://j.facerome.com/modules/article/toplist.php', {
                headers: {
                    "SESSIONID": session,
                    "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                    "Host": "j.facerome.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Cookie": cookie,
                },
                params: {
                    "order": "allvote",
                    "sortid": "0",
                    "page": "1",
                    "time": await getTimeStamp(),
                    "jieqi_token": token
                }
            })
            if (res.data.data.articlerows.length > 0){
                ctx.body = await createResponse(200, "获取成功", res.data.data.articlerows);
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

const getFinish = async (ctx) => {
    const cookie = ctx.headers.cookie;
    const { session, token } = ctx.query;
    try {
        if (cookie && session && token){
            const res = await axios.get('http://j.facerome.com/modules/article/toplist.php', {
                headers: {
                    "SESSIONID": session,
                    "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                    "Host": "j.facerome.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Cookie": cookie,
                },
                params: {
                    "order": "allvisit",
                    "sortid": "0",
                    "page": "1",
                    "fullflag": "1",
                    "time": await getTimeStamp(),
                    "jieqi_token": token
                }
            })
            if (res.data.data.articlerows.length > 0){
                ctx.body = await createResponse(200, "获取成功", res.data.data.articlerows);
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

module.exports = {
    getSwiperList,
    getRecommendList,
    getLastUpdate,
    getTopRanking,
    getFinish
}