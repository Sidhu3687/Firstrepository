//for - condition de adhar te repeated operations krn krn ch help krda if i=0 then prints from 1 to n-1
//for in - object ki keys ko loop in krta hai 
//for off - object ki values k through loop krna hai 
//while 
//do while
//when we write obj[a] means apa object di a key nu access kr rahe a
// Program to add first n natural numbers

// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum += (i + 1)
//   // console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// // console.log(i)


let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop - iterable hoju 
for (let b of "Harry") {
  console.log(b)
}

//while loop. do while loop(aisa loop hai jo km se km ek var execute hota hai) is a variant of 
//while loop(pehla condition check hundi fer block run hunda ie condition true ta block run hunda otherwise nahi
// hunda) its used when we need to execute loop body at least once
//do while is a variant of while loop - pehla block run hunda fer condition check hundi agr true hai again block run hunda and so on 