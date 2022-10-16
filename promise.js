//8th file - three fns that calls one by one
//settimeout kiwe use krna , kise de ndr kahto call kraune a 
function f1() {
    console.log('gagan') //gagan parameter for f1
    
  }
  function f2() {
     console.log('deep') //deep parameter for f2
     f3();
  }
  function f3() {
     console.log('sidhu') //sidhu parameter for f3
  }
  f1();
  f2();

  
  // another complex eg of Invoking the functions one by one
  
  function f1() {
    // Some code
  }
  function f2() {
    f1();
  }
  function f3() {
    f2();
  }
  f3();

//asynchronous event

// function first(){
//     console.log('i am first function')
// }
// function second(){
//    // setTimeout(() => {
//      //   console.log(' set time for 3 sec');
//         console.log('i am second function')//;},5000);
//   first();
// }
// function third(){
//     console.log('i am third function')
//     setTimeout(second , 5000);
// }

// third()



// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );