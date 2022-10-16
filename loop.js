// 5th file - syntax for(start_condition,end_condition,increment) { forloop body }
// program to display text 5 times
const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I am Gagan`);
} //ouput prints five times

// looping from i = 1 to 5
for (let i = 1; i <= 5; i++) {
     console.log(i);
 }
 //output 1 2 3 4 5

 x = 0
 y = 4
//1st iteration x=0+0=0 2nd iteration x=0+1=1 3rd iteration x=1+2=3
//(sum=sum+i equivalent sum+=i) (sum=sum-i equivalent sum-=i)
 for(i= 0; i<=y;i++){
   x = x +i;
  console.log(x)
 }
 //output 0 1 3 6 10

// forloop in array
arr = [1,8,9,66,77,56]
  console.log(arr[4]) //77
  console.log(arr[0]) //1
  console.log(arr[5]) //56
  console.log(arr.length) //6

//print same array using forloop instead of writing long code,why output at end undefined?? loop always return something
// so write return 
 for(i=0;i<=arr.length;i++){
//if we do not write i in next line with arr it simply print whole array 7 times ?? i written bcz i increment ho rahi a 
// arr[0]arr[1]arr[2].....
      console.log(arr[i]);
 }

// // program to display the sum of natural numbers(16-22 line //krke then ah chldi)
// //Here, the value of sum is 0 initially. Then, a for loop is iterated from i = 1 to 100. 
// //In each iteration, i is added to sum and its value is increased by 1.
// //When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.
// // why let sum = 0 ??? we have to define variable ie we have to initialize variable value in every loop
// // global scope vs local scope in java script - study eg ghar k andr kaam krne k permission di hai local hai
// // jisko bahr bhi access hai aur andr bhi v global scope hai here sum is global 
let sum = 0;
 const z = 100

// looping from i = 1 to z
// in each iteration, i is increased by 1
// i is let 1 bcz natural number starts frm 1 not 0, natural nos are 1,2,3,4,5,6,7,8.....
 for (let i = 1; i <= z; i++) {
     sum += i;  // sum = sum + i
 }
// sum do var- sum: is displayed in output ie sum:5050
 console.log('sum:', sum); 

// // print even numbers

for (let i = 2; i <= 6; i+=2) {
    console.log(i);  // printing the value of i output 2 4 6
}

//print even odd numbers ************
let numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}
console.log("The even numbers are: " + evenNumbers);
console.log("The odd numbers are: " + oddNumbers);

//print even nos
for(i=10; i<=20; i++){
    // let's divide the value by 2
    // if the remainder is zero then it's an even number
   
    if(i % 2 == 0){
      console.log(i);
    }
  }