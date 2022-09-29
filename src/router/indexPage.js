const Router = require('koa-router');
const { getSwiperList } = require('../controller/indexPage');
const indexPageRouter = new Router();

// 获取首页轮播图的信息
indexPageRouter.get('/swiper', getSwiperList);

module.exports = indexPageRouter;