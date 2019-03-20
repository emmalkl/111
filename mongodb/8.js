// db.tel.find()
var startTime=(new Date()).getTime();
var db=connect('shop');
//查询13769687528的时间
var result=db.tel.find({tel:'13769687528'});
result.forEach(res=>printjson(res));

var runTime=new Date().getTime()-startTime;
print('run time is '+runTime+'ms');

//建索引,查询更快
// db.tel.ensureIndex({tel:1})
