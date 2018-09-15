var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');


http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case '/':
         goLogin(res,req);
         break;
        case '/add':
         goPost(res,req);
         break;
        default:
         res.writeHead(404,{'Content-type':'text/plain'});
         red.end('no page find')
    }
}).listen(3000);


function goLogin(res,req){
  var pathname=__dirname+'/module/'+url.parse('login.html').pathname;
  var loginData=fs.readFileSync(pathname,'utf-8');
   res.writeHead(200,{'Content-type':'text/html'});
   res.end(loginData);
}

function goPost(res,req){
  //post数据超过4096字节，get不能
  var postData="";
  req.setEncoding('utf8');
  req.addListener('data',function(postChunkData){
      postData+=postChunkData;
  });
  req.addListener('end',function(){
      var paramobj=querystring.parse(postData);
      console.log(paramobj.username);
      
  })
}


console.log('server start');
