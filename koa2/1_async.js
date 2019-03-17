async function timeout() {
    return '1'
}

console.log('2');
//console.log(timeout());//Promise{'1'}  要想获取promise的值需要then方法
timeout().then(result=>{
    console.log(result);  
})