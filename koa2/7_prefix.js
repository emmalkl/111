const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router')
const router=new Router({prefix:'/alindeqianzhui'});

router.get('/abc',(ctx,next)=>{
    ctx.body='alin';
})
router.get('/123',(ctx,next)=>{
    ctx.body='第二个alin';
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); 