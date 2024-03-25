/*
 * @Description: 资源模块路由
 */
const Router = require('koa-router');
const resourcesController = require('../../controllers/resourcesController')

let resourcesRouter = new Router();

resourcesRouter
  .post('/resources/carousel', resourcesController.Carousel)

module.exports = resourcesRouter;
