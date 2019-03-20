db.user.find(
    {age:{$gte:18,$lte:25}},
    {name:true,age:true,_id:false}//可以只显示name和age

)
db.user.find(
    {age:{$in:[18,25]}},
    {name:true,age:true,_id:false}//可以只显示name和age

)
db.user.find({
    $or:[
        {age:{$gte:20}},
        {'pc.brand':'asus'} //这两个条件成立一个，$and/$not
    ]},   
    {name:true,age:true,_id:false}//可以只显示name和age

)

db.user.find(
    {hobby:['bat']},//只有这个bat爱好的被查出
    {hobby:'bat'},//爱好里有bat就可以被查到
    {name:true,age:true,_id:false}
)
db.user.find(
    {hobby:{$in:['bat','吃鸡']}},//爱号中有这两个一个的就可以被查到
    {hobby:{$all:['bat','吃鸡']}},//爱号中这两个必须都有的才能被查到
    {name:true,age:true,_id:false}
)
db.user.find(
    {hobby:{$size:1}},//通过数组里元素个数查找
    {name:true,age:true,_id:false}
)
db.user.find(
    {},
    {name:true,age:true,_id:false}
).limit(1).skip(0).sort({age:-1})
// 查询第？个  跳过第几个    降序
