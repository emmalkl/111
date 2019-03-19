var user1={
    name:'alin',
    age:19,
    hobby:['追星','sing','nihao'],
    pc:{
        bond:'asus',
        price:4000
    }
}
var user2={
    name:'alin1',
    age:19,
    hobby:['追星1','sing1','nihao1'],
    pc:{
        bond:'asus1',
        price:40001
    }
}
var user3={
    name:'alin3',
    age:19,
    hobby:['追星3','sing3','nihao3']
}
var db=connect("shop");
db.user.insert([user1,user2,user3]);
print('insert success');