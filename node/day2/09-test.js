

// 1.server读取文件到内存  处理路径？
// 2.把内存数据变成数据包
// 3.发送数据包并结包
var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
    //找到文件路径
    // var readPath='./module/'+'index.html';
    // console.log(__dirname);
   //console.log(url.parse(req.url));
    var readPath=__dirname+'/module/'+url.parse('index.html').pathname;
    //把文件加载到内存
    var data=fs.readFileSync(readPath,'utf-8');
    //把数据打成数据包
    res.writeHead(200,{'Content-type':'text/html'});
	res.end(data);
	//res.writeHead()
	//console.log(readPath);    
}).listen(3000);
console.log('server start');



// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end('<h3>hello</h3>')
// }).listen(3000);
// console.log('server start');


//mime头 409种文件格式   可执行PE

// https://greasyfork.org/zh-CN/scripts