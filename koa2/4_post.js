const Koa=require('koa');
const app=new Koa();

app.use(async ctx=>{
    //接受post来的信息  叠加数据  eg：username=alin&password=19
    let data='';
    //监听data数据，收到表单数据时就会执行  req属性  ctx对象下属性很多
    ctx.req.on("data",chunk=>{
        data+=chunk;//二进制
    })
    //接收表单提交数据完成后
    ctx.req.on("end",chunk=>{
        data=decodeURI(data);//解码
        console.log(data);//username=alin&password=19   为了拿到key 和value的值的话需要解析data字符串
    })
    ctx.body='123'
})
app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); 