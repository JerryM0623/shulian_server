const axios = require('axios');
const {getTimeStamp} = require("../utils/getTimeStamp");

// sessionId, token, cookie
const indexPageRequest = async () => {
    try{
        const res = await axios.get('http://j.facerome.com/', {
            headers:{
                // "SESSIONID": sessionId,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                // "Cookie": cookie,
            },
            params:{
                time: await getTimeStamp(),
                // "jieqi_token": token
                "jieqi_token": ""
            }
        })
        return res;
    }catch (e) {
        throw e;
    }
}

module.exports = { indexPageRequest }