const axios = require('axios');
const {getTimeStamp} = require("../utils/getTimeStamp");

const getBookIdRequest = async (session, token, cookie, keyWord) => {
    try {
        const res = await axios.post('http://j.facerome.com/modules/article/search.php', {
            "searchtype": "all",
            "searchkey": keyWord,
            "act": "search",
            "page": 1,
            "time": await getTimeStamp(),
            "jieqi_token": token
        }, {
            headers: {
                "SESSIONID": session,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                "Cookie": cookie,
                "Content-Type": "application/json"
            }
        })
        if (res.data.data.jieqi_redirect && res.data.data.redirect_url) {
            // 解析 id
            const url = res.data.data.redirect_url;
            const id = url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
            return id;
        } else {
            // 返回 error
            return "request fail";
        }
    } catch (e) {
        throw e;
    }
}

const getBookDetailRequest = async (session, token, cookie, bookId) => {
    try {
        const res = await axios.post('http://j.facerome.com/modules/article/articleinfo.php', {
            "id": bookId,
            "time": await getTimeStamp(),
            "jieqi_token": token
        }, {
            headers: {
                "SESSIONID": session,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                "Cookie": cookie,
                "Content-Type": "application/json"
            }
        })

        if (res.data.data.articlevals.articleid === parseInt(bookId)) {
            return res.data.data.articlevals
        } else {
            return "request fail"
        }
    } catch (e) {
        throw e;
    }
}

module.exports = {
    getBookIdRequest,
    getBookDetailRequest
}