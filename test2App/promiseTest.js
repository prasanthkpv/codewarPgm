function job(data) {
  let promise1 = new Promise(function (reject, resolve) {
    if (isNaN(data)) {
      reject("error");
    } else if (data % 2 == 1) {
      resolve(1);
    } else resolve(2);
    return promise1;
  });

 promise1.then((value) => {
      console.log(value)
    //   return value;
    })
    .then((value)=>{
        console.log('odd or even')
    })
    .catch((value) => {
      console.log('error', value)
    //   return value;
    });
    
}

module.exports = job;
