const Router = require('koa-router');
const { getBookResult, getHotKeywords, getNextPageBookResult } = require('../controller/search');

const searchRouter = new Router();

// 热搜关键字
searchRouter.get('/hot', getHotKeywords);
// 自定义搜索（搜索用户）
// searchRouter.post('/user', getUserResult);
// 自定义搜索（搜索书籍）
searchRouter.post('/book', getBookResult);
// 追加更新页面
searchRouter.post('/book/next', getNextPageBookResult)

module.exports = searchRouter;