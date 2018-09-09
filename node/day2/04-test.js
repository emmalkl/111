function haveLunch(food,drink,callback){
    console.log('Having lunch of'+lunch+","+drink);
    if(callback && typeof(callback)==='function'){
        // callback(); wrong
        // setTimeout(callback(),5000); wrong
        setTimeout(function(){
            callback()
        },5000)
    }
}

haveLunch('toast','coffee',function(){
    console.log('finished lunch');
    
})