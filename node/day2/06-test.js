// var Person=require('./05-test.js')

//下面是从05复制过来的
// var person=new Person();
// person.think(function(){
//     console.log("thinking 5 seconds get the right answer");
    
// });
// person.answer();//i am answering other question


var person=require('./05-test.js')
console.log(person);
person.think(function(){
    console.log("thinking 5 seconds get the right answer");   
});
person.answer();//i am answering other question



// var arr=require('./05-test.js');
// console.log(arr);