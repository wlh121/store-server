/*
 * @Description: 汇总模块子路由
 */
const Router = require('koa-router');

let Routers = new Router();

const userRouter = require('./router/userRouter');
const resourcesRouter = require('./router/resourcesRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');
const orderRouter = require('./router/orderRouter');
const collectRouter = require('./router/collectRouter');

Routers.use(userRouter.routes());
Routers.use(resourcesRouter.routes());
Routers.use(productRouter.routes());
Routers.use(shoppingCartRouter.routes());
Routers.use(orderRouter.routes());
Routers.use(collectRouter.routes());
Routers.get("/get_hello_world", async (ctx, next) => {
    ctx.body = {
        content: "hello world!!!"
    }
})
module.exports = Routers;

