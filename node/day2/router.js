//入口文件（10-test.js）--路由(router.js,去调用10.js;接受浏览器向服务器发送的地址；res数据包返回；路径)--控制器
var MainIndex=require('./mainindex.js');
var ParseDns=require('./parsedns.js');

exports.router=function(){
       switch(pathname){
        case '/':
        //  goIndex(res);
        MainIndex.goIndex(res);
         break;
        case '/parse':
        //  goDns(res);
        ParseDns.goDns(res);
         break;
        default:
         res.writeHead(404,{'Content-type':'text/plain'});
         red.end('no page fond')
    }
}