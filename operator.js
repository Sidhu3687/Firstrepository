//3rd file - arithematic operators - assignment = addition + multiplication * exponential ** 3power4 3*3*3*3=81
// (modulus %- reminder) quotient is / increment ++ decrement --
let a = 3
let b = 4
let c = a**b //exponential
console.log(c) //output 81
console.log("modulus",4%2) // output modulus 0
console.log('modulus',5%2) // output modulus 1
console.log('modulus',5/2) // output  modulus 2.5

// assignment op are(+= add value to variable ,-= subtract value from variable 
// ,*= multiplies a variable /=divides a variable ) %= **=
let x = 5
x += 4 ;
console.log(x) //output 9

let x2 = 5
let y=x2 ** 4
console.log(y) // output 625
console.log(x2++) // 5 pehlax2 di value print krdu kyoki x2 nu pehla print kita jarea but ohdi value 6 hogi c
console.log(++x2) // 7 .upro value chakki6 1 add krke print krta

//comparison operators == != ==== !== < > <= >= 
let x3=4
let y3=8
console.log("x3 == y3 is ", x3==y3) //false
console.log("x3!= y3 is ", x3!=y3) //true. they asking is x3 is not equal to y3  result is true 
console.log("x3<y3 is", x3<y3) //true
console.log("x3<=y3 is", x3<=y3) //true
let x4=4
let y4="4"
console.log("x4===y4 is", x4===y4) //false because data type is not same 
console.log("x4!===y4 is", x4!==y4) //true bcoz data type value is not same and the condition is met

//logical operators(operates on booleans)
//logical and && - only true and true results true rest all 3 return false 
//logical or ||  - if both condition false then results false otherwise true  
let p = 3
let q = 4
console.log (p<q && p==q) //false .one condition false
console.log (p<q && p!=q) //true .both condition true
console.log (p<q || p==q) //true . one condition is true 
console.log (p>q || p==q) //false . both condition are false