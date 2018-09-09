
function Person(){
    this.eat=function(){
        console.log('eating');        
    }
    this.say=function(){
        console.log('saying');       
    }
}
module.exports=Person;




exports.eat=function(){
    console.log('eating');
}
exports.say=function(){
    console.log('saying');
}


module.exports={
    'say':function(){
        console.log('saying');       
    },
    'eat':function(){
        console.log('eating');        
    }
}

// exports.arr=['haha','hehe'];
module.exports=['haha','hehe'];