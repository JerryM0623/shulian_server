const Router = require('koa-router');
const { getResult, getHotKeywords } = require('../controller/search');
const {search} = require("koa/lib/request");

const searchRouter = new Router();

// 热搜关键字
searchRouter.get('/hot', getHotKeywords);
// 自定义搜索
searchRouter.post('/', getResult);

module.exports = searchRouter;