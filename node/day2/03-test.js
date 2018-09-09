//回调函数可以是同步的也可以是异步的

function waitFive(name,function_name){
   var pus=0;
   var currentData=new Data();
   while(pus<5000){
       var now=new Data();
       pus=now-currentData;
   }
   function_name(name)
}
function echo(name){
    console.log(name);
    
}
waitFive('haha',echo);//haha
console.log('its over');
