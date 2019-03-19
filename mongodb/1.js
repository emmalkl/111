var userName="alin";
var time=Date.parse(new Date());
var data={
    "username":userName,
    "regesterTime":time
};
//链接数据库
var db=connect("shop");
db.user.insert(data);
print('insert success');

