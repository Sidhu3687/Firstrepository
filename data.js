//a+b a and b are operands + operator
//1st file - print a string hello
// console.log('hello')

// //print type of x
// x = 89
// console.log(typeof(x)) 
// x = 'Gagandeep'
// console.log(typeof(x))
// x = 11.11
// console.log(typeof(x))

// //print array (when we print typeof it says object but is array) ??? eh object hi hunda in java,array is a typeof object or subclass of a super class
// //value of array ie indexing starts from 0,1,2,3,4....ie audi=0 volvo=1 
// y = ['audi','volvo','bmw',11] //array used in registeration form
// console.log(typeof(y))
// y = ['audi','volvo','bmw',11]
// console.log(y)

// // //print object (why we use const before car.same if we do not put const) ??? is constant value cant be changed
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car)
// y = {name:'gagan', age:"30", email:'xyz@gmail.com'}
// console.log(typeof(y))



//variable di value jehri runtime ch paune a ohi store ho jandi so ohi print kruga
//let nal ohdi value change ni hundi te tahi vari vari different print krda fer let block scoped hunda
//using let we can make block scoped variables 
let b = "Harry";

{
  let b = 'this' //whatever is written in codes is block 
  console.log(b)
}
console.log(b) // this harry. pehla block print hogea then bahr ala print hogea

var c = "Harry";

{
  var c = 'this'
  console.log(c)
}
console.log(c) // this this .c variable di value this store hogi because value changed during runtime 
