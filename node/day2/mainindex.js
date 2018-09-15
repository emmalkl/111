var url=require('url');
var fs=require('fs');

exports.goIndex=function goIndex(res){
    var pathname=__dirname+"/module/"+url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(indexPage);
 }