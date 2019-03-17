const Koa=require('koa');//koa来自package.json中  加载koa模块
const app = new Koa(); //new实例化对象

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); //监听3000端口