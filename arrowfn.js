// 9th file - arrow function set time out 14 sep class
const sumNumber = (a,b)=>{
    sum =a+b;
    console.log(sum)
}

sumNumber(6,9)
setTimeout(sumNumber,3000,5,9)

setTimeout(()=>{
    console.log('hi i am timeout for 2 sec')
},2000)

//syntax of arrow function

const print = ()=>{
    console.log('printing ..........')
}

console.log(print())

//2nd


const Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('time is up ⏰');
    }, 1e3);
  
    setTimeout(() => {
      reject('Oops 🔥');
    }, 2e3);
  });
  

  console.log(promise)
  promise
    .then(console.log) //to print
    .catch(console.error); //to find errors

    //3rd

    
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('time is up ⏰');
    }, 1e3);
  
    setTimeout(() => {
      reject('Oops 🔥');
    }, 2e3);
  });
  

  console.log(promise)
  promise
    .then(console.log)
    .catch(console.error);