var http=require('http');
var fs=require('fs');
var url=require('url');
var dns=require('dns');
var querystring=require('querystring');
var router=require('./router.js');

http.createServer(function(req,res){
    /*console.log(req.headers);
    console.log(req.url);
    console.log(url.parse(req.url));*/

//入口文件写下面这两句跳转至router.js
    var pathname=url.parse(req.url).pathname;
    router.router(res,req,pathname);
    /*switch(pathname){
        case '/':
         goIndex(res);
         break;
        case '/parse':
         goDns(res);
         break;
        default:
         res.writeHead(404,{'Content-type':'text/plain'});
         red.end('no page find')
    }*/
}).listen(3000);

/*function goIndex(res){
   var pathname=__dirname+"/module/"+url.parse('index.html').pathname;
   var indexPage=fs.readFileSync(pathname,'utf-8');
   res.writeHead(200,{'Content-type':'text/html'});
   res.end(indexPage);
}

function goDns(res){
   var domain="www.qq.com";
   dns.resolve4(domain,function(err,addresses){
       if(err){
           console.log(err);
           
       }else{
        //    console.log(addresses);
           var str=querystring.stringify(addresses);
           res.writeHead(200,{'Content-type':'text/html'});
           res.end(str);
       }
   })
}*/
console.log('server start');
