var url=require('url');
var fs=require('fs');

exports.goDns=function goDns(res){
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
 }