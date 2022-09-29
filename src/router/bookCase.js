const Router = require('koa-router');
const { getBookCaseList } = require('../controller/bookCase');
const bookCaseRouter = new Router();

// 获取书架列表
bookCaseRouter.get('/list', getBookCaseList);

module.exports = bookCaseRouter;