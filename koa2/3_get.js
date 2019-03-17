const Koa=require('koa');
const app = new Koa();

app.use(async ctx => {
    //{"url":"/","query":{},"queryString":""}
    // http://localhost:3000/?username=alin&age=19  对应的结果是{"url":"/?username=alin&age=19","query":{"username":"alin","age":"19"},"queryString":"username=alin&age=19"}
   let url=ctx.url;
   let query=ctx.query;
   let queryString = ctx.querystring;
   ctx.body={
       url,
       query,
       queryString
   }
});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); 