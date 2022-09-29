const { indexPageRequest } = require('../request/indexPageRequest');
const {createResponse} = require("../utils/createResponse");

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

module.exports = {
    getSwiperList,
    getRecommendList
}