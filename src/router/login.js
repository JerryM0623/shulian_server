const { loginController } = require('../controller/login');
const Router = require('koa-router');
const loginRouter = new Router();

// 创建路由
loginRouter.post('/', loginController);

module.exports = loginRouter;