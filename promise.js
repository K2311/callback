const myPromise = new Promise((resolve,reject)=>{
    const success = true;
    if(success){
        resolve('opretion success');
    }else{
        reject('There is an error');
    }
});

myPromise.then((msg)=>{
    console.log('Fulfilled:',msg);
}).catch((err)=>{
    console.log('Rejected',err);
});