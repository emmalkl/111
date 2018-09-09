//实现person.js文件模块

var Person=require('./person.js');
var person=new Person();//注意！对应person.js里的第一段代码才写这句
person.say();
person.eat();



var Person=require('./person.js');
person.say();
person.eat();



var Person=require('./person.js');
// console.log(Person.arr);
console.log(Person);

