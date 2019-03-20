var modify={
    findAndModify:'user', //集合名称
    query:{name:'alin'}, //查询alin
    update:{$set:{age:3}},
    new:true //true返回修改以后的结果，false返回修改以前的结果
};
var result=db.runCommand(modify);
printjson(result);