
function asyncFun1(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Task 1 resolved');
            },1000);
        });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Task 2 resolved');
        },1000);
    });
}

asyncFun1().then((data1)=>{
    console.log(data1);
    return asyncFun2();
}).then((data2)=>{
    console.log(data2);
}).catch((err)=>{
    console.log(err);
});