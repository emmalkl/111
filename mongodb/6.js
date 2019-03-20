var db=connect('shop');
var userList=db.user.find();
userList.forEach(function(user){
    printjson(user);//循环遍历每一个user
})