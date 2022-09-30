const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// 启用 bodyParser
app.use(bodyParser());

// 引入分路由
const loginRouter = require('./src/router/login');
const indexPageRouter = require('./src/router/indexPage');
const searchRouter = require('./src/router/search');
const bookDetailRouter = require('./src/router/bookDetail');
const bookCityRouter = require('./src/router/bookCity');
const bookCaseRouter = require('./src/router/bookCase');
const profileRouter = require('./src/router/profile');

// 启用分路由
router.use('/login', loginRouter.routes(), loginRouter.allowedMethods());
router.use('/main', indexPageRouter.routes(), indexPageRouter.allowedMethods());
router.use('/search', searchRouter.routes(), searchRouter.allowedMethods());
router.use('/book',bookDetailRouter.routes(), bookDetailRouter.allowedMethods());
router.use('/city', bookCityRouter.routes(), bookCityRouter.allowedMethods());
router.use('/bookcase', bookCaseRouter.routes(), bookCaseRouter.allowedMethods());
router.use('/profile', profileRouter.routes(), profileRouter.allowedMethods());

// 启用 router
app.use(router.routes()).use(router.allowedMethods());

// 启用服务器
app.listen(4477, () => {
    console.log('server init...');
    console.log(`this server is running at: http://localhost:4477`);
})