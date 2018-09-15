var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/img':
         getimg(res,req);
         break;
    }
}).listen(3000);
function getimg(res,req){
   var pathname=__dirname+"/img/"+url.parse('10.jpg').pathname;
   var img=fs.readFileSync(pathname,'utf-8/jpg');
   res.writeHead(200,{'Content-type':'text/html/jpg'});
   res.end(img);
}
console.log('server start');
