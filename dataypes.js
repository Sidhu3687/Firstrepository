// nn bb ss u - Primitives in Js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "Gagan"
let f = Symbol("I am a nice symbol")
let g = undefined // we can also write only let g
console.log(a, b, c , d, e, f, g)
console.log(typeof (c)) // c can also be without brackets 

// Non Primitive Data Type - Objects in Js
// used in eg  mapping item price, mapping student marks, mapping name and classroom, dictionary
const Gagan = {
  Car: "Mercedes", //has to be in codes because its a string
  City: "Calgary", //car city all can be in codes or can be without codes
  Age: 30,
  Pind: "Barundi",
  Intelligence : undefined,
  Mature : true //no need to use comma in last 
}
console.log(Gagan["Mature"]) // Gagan di kehri cheej search krni oh bracket ch 

//questions
// Chapter 1 - Q1
let a1 = "Harry"
let b1 = 6
console.log(a1 + b1) //Harry6

// Chapter 1 - Q2
console.log(typeof (a1+b1)) //String

// Chapter 1 - Q3
const a2 = { //eh block de andr apa value add kr skde a koi v but a2 kush hor hold ni kr skda bahro
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a2 = 45 //cant pass number value to a2 because a2 is holding object and will not take number,string anything
// a2 = {} //it wont store any other object also

// Chapter 1 - Q4
a2['friend'] = "Shubham"  
a2['name'] = "Lovish"  //j comment krage then will execute harry in name
console.log(a2) //{ name: 'Lovish', section: 1, isPrincipal: false, friend: 'Shubham' }

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka']) // also we can use console.log(dict.yakka)