// 4th file - length of array 
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];
// truncate/shorten the Array to 3 elements
languages.length = 3
console.log(languages)
// Output: [ 'JavaScript', 'Python', 'C++' ]

// extend the Array to length 6
languages.length = 6
console.log(languages)
// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ] already defined 3 above if we // then output different 


let primeNumbers = [2, 3, 5, 7]
let evenNumberss = [2, 4, 6, 8]
// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumberss); // ()it is parameter 
console.log(joinedArrays);
// output [ 2, 3, 5, 7, 2, 4, 6, 8 ]

// no parameters passed in sort method but in concat method parameters passed
let country = ['india' , 'Canada' , 'england' ]
let currency = ['rs' , 'dollar' , 'euro']
let joinedarray = currency.concat(country) 
console.log(joinedarray) //output [ 'rs', 'dollar', 'euro', 'india', 'Canada', 'england' ]
console.log(country.sort()) //output [ 'Canada', 'england', 'india' ]
console.log(currency.sort()) //output [ 'dollar', 'euro', 'rs' ]

//push() add zero or more elements to end of array
let city = ["New York", "Madrid", "Kathmandu"];
// add "London" to the array
city.push("London",'barundi','calgary');
console.log(city);
// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London', 'barundi', 'calgary' ]

//sort - sorts items of array in specific order (ascending or descending)
let city1 = ["California", "Barcelona", "Paris", "Kathmandu"];
// sort the city1 array in ascending order
let sortedArray = city1.sort();
console.log(sortedArray);
// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

//pop()removes last element from array and returns that element
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// remove the last element
let removedCity = cities.pop();
console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

//flat() creates new array by flattening nested array upto specified depth
// 3 nested arrays 
let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray = numbers.flat(2);

// new flatten array
console.log(flattenArray);

// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

//foreach()
let numbers1 = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers1.forEach(computeSquare);


/* Output:
1
9 
16
81
64
*/

// function to check even numbers using if else and filter() array type
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) 
{
  if (number % 2 == 0)
    return true;
  else
    return false;
}
// create a new array by filtering even numbers from the numbers array 
let evenNumbers = numberss.filter(checkEven);
console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]