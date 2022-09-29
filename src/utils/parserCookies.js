const parserCookies = async (cookies) => {
    const result = [];
    cookies.forEach(cookie => {
        const obj = {};
        const tempArray = cookie.split(';');
        // name and body
        const cookieName = tempArray[0].trim().substring(0, tempArray[0].trim().indexOf('='));
        const cookieBody = tempArray[0].trim().substring(tempArray[0].trim().indexOf('=') + 1);
        obj.cookieName = cookieName;
        obj.cookieBody = cookieBody;
        // other options
        for (let i = 1; i < tempArray.length; i++){
            let keyWord = tempArray[i].trim().substring(0, tempArray[i].trim().indexOf('='));
            const content = tempArray[i].trim().substring(tempArray[i].trim().indexOf('=') + 1);
            if (keyWord === "Max-Age"){
                keyWord = "maxAge";
                // php 的 maxAge 返回的是 秒 但是 node 设置的时候需要使用 毫秒
                obj[keyWord] = isNaN(parseInt(content)) ? (60 * 60 * 1000) : (parseInt(content) * 1000)
            }else if (keyWord === "expires"){
                obj[keyWord] = Date.parse(content);
            }else if (keyWord === "httpOnly" || keyWord === "overwrite" || keyWord === "secure"){
                obj[keyWord] = content === "true";
            }else{
                obj[keyWord] = content;
            }
        }
        result.push(obj);
    })
    return result;
}

module.exports = { parserCookies }