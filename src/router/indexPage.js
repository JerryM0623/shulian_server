const Router = require('koa-router');
const { getSwiperList,
    getRecommendList,
    getLastUpdate,
    getTopRanking,
    getFinish
} = require('../controller/indexPage');
const indexPageRouter = new Router();

// 获取首页轮播图的信息
indexPageRouter.get('/swiper', getSwiperList);
// 潜力好书的信息
indexPageRouter.get('/recommend', getRecommendList);
// 最近更新的信息
indexPageRouter.get('/lastupdate', getLastUpdate);
// 热门排行的信息
indexPageRouter.get('/topranking', getTopRanking);
// 完结小说的信息
indexPageRouter.get('/finish', getFinish);

module.exports = indexPageRouter;