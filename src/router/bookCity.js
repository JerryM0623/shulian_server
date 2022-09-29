const Router = require('koa-router');
const bookCityRouter = new Router();

const { getTypeDetail } = require('../controller/bookCity');

// 分类查找
bookCityRouter.get('/detail', getTypeDetail);

module.exports = bookCityRouter;