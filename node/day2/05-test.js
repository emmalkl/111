function Person(){
  this.answer=function(){
      console.log("i am answering other question");
      
  }
  this.think=function(callback){
    console.log("thinking 5。。。");
      setTimeout(function(){
          callback();
      },5000)
  }
}




//下面这段代码放入06-test。js中
// var person=new Person();
// person.think(function(){
//     console.log("thinking 5 seconds get the right answer");
    
// });
// person.answer();//i am answering other question


//06里调用05

//方法一
module.exports=Person;

//方法二
// module.exports={
//     'answer':function(){
//         console.log("i am answering other question");
        
//     },
//     'think':function(callback){
//         console.log("thinking 5。。。");
//           setTimeout(function(){
//               callback();
//           },5000)
//       }
// }

//方法3
// exports.answer=function(){
//     console.log("i am answering other question");
// }
// exports.think=function(callback){
//             console.log("thinking 5。。。");
//               setTimeout(function(){
//                   callback();
//               },5000)
//           }




// module.exports=['laoshan','laoxie','xiaofeng'];
