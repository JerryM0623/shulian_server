const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 启用 router
app.use(router.routes()).use(router.allowedMethods());

app.listen(4477, () => {
    console.log('server init...');
    console.log(`this server is running at: http://localhost:4477`);
})