function timeout() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000)
    })
}

async function fn(){
    await timeout();//等timeout（）执行成功在打印2   异步操作 
    console.log(2);
}
fn()