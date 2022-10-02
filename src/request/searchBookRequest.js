const axios = require('axios');
const {getTimeStamp} = require("../utils/getTimeStamp");

// session, token, cookie, keyWord
const getBookIdRequest = async (keyWord) => {
    try {
        const res = await axios.post('http://j.facerome.com/modules/article/search.php', {
            "searchtype": "all",
            "searchkey": keyWord,
            "act": "search",
            "page": 1,
            "time": await getTimeStamp(),
            // "jieqi_token": token
            "jieqi_token": ""
        }, {
            headers: {
                // "SESSIONID": session,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                // "Cookie": cookie,
                "Content-Type": "application/json"
            }
        })

        if (res.data.code === 0 && res.data.message === "redirect"){
            // 第一种情况：只有一本对应的书
            // 解析 id
            const url = res.data.data.redirect_url;
            const id = url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
            return {
                totalResNum: 1,
                totalPageNum: 1,
                resultId: id
            };
        }else if (res.data.code === 0 && res.data.message === "" && res.data.data.resultcount > 0){
            // 第二种情况：模糊搜索了很多书
            return {
                totalResNum: res.data.data.allresults,
                totalPageNum: (res.data.data.allresults) / (res.data.data.resultcount),
                results: res.data.data.articlerows
            }
        }else{
            // 第三种情况：一本书都没有搜索到
            return {
                totalResNum: 0,
                totalPageNum: 0,
                results: "No Search Result"
            }
        }


        // if (res.data.data.jieqi_redirect && res.data.data.redirect_url) {
        //     // 解析 id
        //     const url = res.data.data.redirect_url;
        //     const id = url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
        //     return id;
        // } else {
        //     // 返回 error
        //     return "request fail";
        // }
    } catch (e) {
        throw e;
    }
}

// session, token, cookie, bookId
const getBookDetailRequest = async (bookId) => {
    try {
        const res = await axios.post('http://j.facerome.com/modules/article/articleinfo.php', {
            "id": bookId,
            "time": await getTimeStamp(),
            // "jieqi_token": token
            "jieqi_token": ""
        }, {
            headers: {
                // "SESSIONID": session,
                "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
                "Host": "j.facerome.com",
                "Connection": "Keep-Alive",
                "Accept-Encoding": "gzip",
                // "Cookie": cookie,
                "Content-Type": "application/json"
            }
        })

        if (res.data.code === 0){
            return res.data.data.articlevals
        }else{
            return "No Result"
        }
        // if (res.data.data.articlevals.articleid === parseInt(bookId)) {
        //     return res.data.data.articlevals
        // } else {
        //     return "request fail"
        // }
    } catch (e) {
        throw e;
    }
}

const getNextPageBook = async (keyWord, page) => {
    const res = await axios.post('http://j.facerome.com/modules/article/search.php', {
        "searchtype": "all",
        "searchkey": keyWord,
        "act": "search",
        "page": page,
        "time": await getTimeStamp(),
        // "jieqi_token": token
        "jieqi_token": ""
    }, {
        headers: {
            // "SESSIONID": session,
            "user-agent": 'Mozilla/5.0 (Linux; Android 12; M2006J10C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)',
            "Host": "j.facerome.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            // "Cookie": cookie,
            "Content-Type": "application/json"
        }
    })

    if (res.data.code === 0 && res.data.message === ""){
        return {
            totalResNum: res.data.data.allresults,
            totalPageNum: (res.data.data.allresults) / (res.data.data.resultcount),
            results: res.data.data.articlerows
        }
    }else {
        return ""
    }
}

module.exports = {
    getBookIdRequest,
    getBookDetailRequest,
    getNextPageBook
}