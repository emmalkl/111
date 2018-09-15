var http=require('http');
var url=require('url');
var querystring=require('querystring');

//querystring完成get提交
http.createServer(function(req,res){
    /*var paramobj=url.parse(req.url).query;
    console.log(paramobj);*/

    /*var param=url.parse(req.url).query;
    var parr=param.split('&');
    var num=parr.length-1;
    var strnext=parr[num];
    console.log(strnext);*/
    
    var param=url.parse(req.url).query;
    var paramobj=querystring.parse(param);
    console.log(paramobj.name);
    
    
}).listen(3000);
console.log('server start');
