const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// 启用 bodyParser
app.use(bodyParser());

// 引入分路由
const loginRouter = require('./src/router/login');

// 启用分路由
router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());

// 启用 router
app.use(router.routes()).use(router.allowedMethods());

// 启用服务器
app.listen(4477, () => {
    console.log('server init...');
    console.log(`this server is running at: http://localhost:4477`);
})