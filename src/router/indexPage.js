const Router = require('koa-router');
const { getSwiperList, getRecommendList } = require('../controller/indexPage');
const indexPageRouter = new Router();

// 获取首页轮播图的信息
indexPageRouter.get('/swiper', getSwiperList);
// 潜力好书的信息
indexPageRouter.get('/recommend', getRecommendList);

module.exports = indexPageRouter;