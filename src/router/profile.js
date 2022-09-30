const Router = require('koa-router');
const { getUserDetail } = require("../controller/profile");

const profileRouter = new Router();

// 获取用户信息
profileRouter.get('/', getUserDetail);

module.exports = profileRouter;