const Router = require('koa-router');
const { getBookDetail } = require('../controller/bookDetail');

const bookDetailRouter = new Router();

bookDetailRouter.get('/', getBookDetail)

module.exports = bookDetailRouter;