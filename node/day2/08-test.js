// var arr=['www.qq.com','www.baidu.com','www.sohu.com'];

//判断上面三个网站谁返回的快
//调用http请求
var http=require('http');
urls=['www.qq.com','www.baidu.com','www.sohu.com'];

function fetchPage(url){
    var start=new Date();
    http.get({'host':url},function(){
        console.log("got response from:"+url);
        console.log("request took:",(new Date()-start),"ms");
    })
}
for(var i=0;i<urls.length;i++){
    fetchPage(urls[i]);
}


//得到百度的ip
// var dns=require('dns');

// dns.resolve4('www.baidu.com',function(err,addresses){
//     if(err){
//         console.log(err);        
//     }else{
//         console.log(addresses);
//     }
// })



// 192.168.23.20~192.168.23.199   (ip转换成10进制，取出相同网段)
// 231.78.0.1~231.78.0.98
// 192.168.23.50~192.168.23.100