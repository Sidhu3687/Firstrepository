//conditional expressions if-condition tru a ta run  hou nahi ta nhi hou, if...else, i...else if....else
//eg fb ask enter username or phonenumber so either they take action 1 or action 2 depend on our input 
//prompt swaal pushda eg browser ch apa promt fn bna k kush print krayiye ta apa to input mngda
// alert apa nu dassda eg browser ch apa alert fn bna k kush likheya ta apa nu sidda print kra k dikhau 
// typecasting - string nu number ch convert krna.


// if(a>18){
//     alert("adult a")
// }
// else{
//     alert("adult nahi a ")
// } //8-12 line is if else  16-27 is if else if else
//prompt does not work in vs code browser ch kamm kru 
let a = prompt("Hey whats you age?"); //by default a will be string so will convert into number below 
a = Number.parseInt(a); // Converting the string to a number - typecasting
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

//js ternanry operator condition true ta pehla print otherwise duja print condition? exp1: exp2
//console.log("You can", (a<18? "not drive" :"drive"))

// Chapter 2PS
// Problem No 1

/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 5
// let age = 19
// let a = age > 18 ? "You can drive" : "You cannot drive"
// console.log(a)