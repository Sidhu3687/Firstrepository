function getYesterday(){
    var yesterday = new Date()
    yesterday.setDate(yesterday.getDate()-1);
    yesterday = yesterday.toISOString().substring(0,10);
    return yesterday;

}

console.log(getYesterday())
// npm init -y
//npm i node-fetch

import fetch from "node-fetch";
const url = 'https://jsonplaceholder.typicode.com/todos' //run on browser its json format  its objets in array

const getTodos = ()=>{
    return fetch(url).then(response=>response.json()).then(todos=>console.log(todos)).catch(err=>console.log(err))
}

//console.log(getTodos()) // if // hta te then same browser ala data print kra dinda

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));
  
//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => console.log(`${response.url}: ${response.status}:${response.json()}`)
//     ));


const myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML API.
    setTimeout(() => {
      resolve(fetch(url)); // Yay! Everything went well!
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => { //then used to value dene ke liye 
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log(`Yay! ${successMessage.json()}`);
  }).catch(err=>console.log(err));
  