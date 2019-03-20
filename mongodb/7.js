function getTel(){
    var prefixArr=['130','131','132','188','152','136','185','155','137','190']
    var tel=prefixArr[parseInt(Math.random()*10)];//10个随机取一个
    for(var i=0;i<8;i++){
        tel+=Math.floor(Math.random()*10);
    }
    return tel;
}

// console.log(getTel());
var startTime=(new Date()).getTime();
var db=connect('shop');
var temInfo=[];
for(var i=0;i<1000000;i++){
    temInfo.push({
        logintime:new Date(),//当前日期
        tel:getTel()
    });
}
db.tel.insert(temInfo);
var runTime=new Date().getTime()-startTime;
print('run time is'+runTime+'ms');