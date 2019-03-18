const Koa=require('koa');
const app = new Koa();

app.use(async ctx => {
    // ctx.cookies.set(name, value, [options])
    // 通过 options 设置 cookie name 的 value :
    if(ctx.url==='/alin'){
        ctx.cookies.set('name','alin',{
            domain:'localhost',//域名
            maxAge :24*60*60*1000 ,// 一个数字表示从 Date.now() 得到的毫秒数
            expires:new Date('2019-3-18'),//过期的 Date
            path: 'alin',// 路径, 默认是'/'
            httpOnly:false,// 服务器可访问 cookie, 默认是 true
            overwrite:false,// 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。
        })
        ctx.body='cookie success';
    }else{
        ctx.body='no cookie';
    }
    
});

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口');
}); 