//将ejs里面的数据传入index.ejs中
const Koa=require('koa');
const app = new Koa();
const views=require('koa-views');
const path=require('path');//webpack
//加载模板
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))
app.use(async ctx => {
    let title='hello alin';
    await ctx.render('index',{
        title,
        // 数组
        list:[
            {name:'alin',age:19},
            {name:'alin2',age:18},
            {name:'alin3',age:17},
            {name:'alin3',age:14}
        ]
    });
});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); 