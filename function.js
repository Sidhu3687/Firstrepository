// // 6th file - Define a function. every line a fn executes sequentially  one line at a time
// ////function - used to organize code, separation of logic is done by fnc. we get different result by providing 
// //values through parameters
// function f1() {
//   // Do something
//   // Do something again
//   // Again
//   // So on...
// }

// // Invoke the function
// f1();
// //function in javascripts
// //When a value is passed when declaring a function, it is called parameter. And when 
// //the function is called, the value passed is called argument.

// function subtraction(a,b){
//     let result = a-b
//     console.log(result) //console.log(a-b)
// }
// //calling function
// subtraction(5,8) //-3
// subtraction(9,5) //4
// subtraction(11,35) //-24

// // program to find the square of a number
// // function is declared inside the variable
// x = function (num) { 
// return num * num
// };
// console.log(x(4)); //output 16
//kahto krde a variable ch fn nu define *******
// // can be used as variable value for other variables
// let y = x(3);
// console.log(y); //output 9

// let array = [2, 4, 6, 8, 10];
// // function to return the square of a number...use of map ?******* map da matlab values da transorm krna 
// //nwi values ch like apa square krna triple krna 
// function square(x) {
//   return x * x;
// }
// // apply square() function to each item of the numbers list
// let dugnivalue = array.map(square);
// console.log(dugnivalue); //[4, 16, 36, 64, 100]
//console.log(square(11)) //output 121
//console.log(square) //[Function: square]

// //cube of array *********
// let arr1 = [5,3,4]
// function cube(y){
//     return y**3
// }
// let cubeofarr1 = arr1.map(cube);
// console.log(cubeofarr1); // [ 125, 27, 64 ]


// // 1. declaration of function  keyword of function ,name of function with braces 
// //2. defining of parameter
// //3. calling of function

// function fullname(){
//   console.log('my name is kamlesh yadav')
// }
// //if we give any value here  then will not give output as undefined
// console.log(fullname())// calling of function
// console.log(fullname)// passing reference of function without braces 

// //nested function

// function fullname(){
//   console.log('my name is Gagan')
//   function myJob(){
//       console.log('my job is to develop software')
//      return 4 //if we // next return line the output undefined ?*****
//      // why we cant print any words here like 'my wish' ********* 
//   }
//   return myJob()//calling of second function //why use return if we // this line then output is only my name
// }

// console.log(fullname())// calling of function
// console.log(fullname)// passing reference of function without braces output-[Function: fullname]

// //nested fn is function within a function. nw fn called only within 1st fn . eg ????? *****
// function addNum(a,b)
// {
//   //nested function - 
//   function addNum2(message)
//   {
//     console.log(message);
//   }
//   let result=a+b;
//   //invoking the nested function
//   addNum2("result is "+result)
// }
// addNum(1,2)

// function sumArray(arr){
//   console.log(arr)  
//   function add(arr){
//       sum = 0;
//       for(i=0;i<arr.length;i++){
//           sum = sum + arr[i]
//       }
//       return sum
//   }
//   return add(arr)
// }

// array = [9,7,8,9,6,5]
// nums = sumArray(array)
// console.log(nums)

// //multiplication with nested fn

// // function first()
// {
//   console.log('i am first before second')
//   function second(){
//       console.log('i am second after first')
//   }
//   return second()
// }

// first()

// //call back function *****  
//A callback function is a function passed into another function as an argument, which is then invoked 
//inside the outer function to complete some kind of routine or action
// function greet(name,callback) {
//   console.log('Hi' + ' ' + name);
//  callback(); // why called here ?? synchronous asynchronous 
// }

// function callMe() { //call me is call back fn
//   console.log('I am callback function');
// }
// greet('sidhu',callMe); // While calling the greet() function, 
// //two arguments (a string value and a function) are passed.

// function Speed(D,T) {
// let  S =D*T
// console.log("The speed is " + S)
// }
// Speed(5,6)

// function sum (num1,num2){
// let num3=num1+num2;
// console.log("the sum of these numbers is " + num3)
// }
// sum(11,45)

// function barundi_units(adda1,adda2){ //adda1 adda2 is parameter
// let total = adda1+adda2;
// console.log("dona addeya te total units ne " + total)
// }
// barundi_units(11,22)
// barundi_units(42,43) //fn invoked 42 43 are arguments

// let numbers = [x,y,z] 

// function square (number * number){
// console.log("square is" + )
// }
// square(6,8,9)

// function login(username, password){
//   console.log("username" , logged in successfully)
// }
//   login('john');
//   login('peter');
  //upr lines ch john and peter will take username. but j apa console.log ali line // krdiye te concole.log
  //(password) krdiye te niche invoke sirf john kriye ta result undefined au. comma to pehla is for 
  //username and coma to bad is for password (watch coder'sgyan functions video)
