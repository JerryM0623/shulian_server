const Router = require('koa-router');
const { getBookCaseList, deleteOneBook} = require('../controller/bookCase');
const bookCaseRouter = new Router();

// 获取书架列表
bookCaseRouter.get('/list', getBookCaseList);
// 删除暑假中的一本书
bookCaseRouter.post('/delete', deleteOneBook);

module.exports = bookCaseRouter;