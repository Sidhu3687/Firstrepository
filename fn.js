// 7th file - Write a function which accepts 2 paramters. Both parameters will be integer.
// The function should return the sum of parameters. 
// Print the result on the console. fn - reusability technique
//atm machine use same function amounts differ 

function sum(num1, num2){
    let result = num1 + num2 

   return result // we do except a result so write return
}

let num1 = 8;
let num2 = 9;
let sum_result = sum(num1, num2)

console.log(sum_result)

let n1 = 9;
let n2 = 10;
let callbackfn = sum(n1,n2)
console.log(callbackfn)

function convert (cel){ //one parameter passed
    let F = cel/2 // f is not parameter 

    return F
}
callbackfn = convert(20)
console.log(callbackfn)

//nested fn

function calculate_area(pi, radius) {
    let area = pi * calculate_radius_square(radius)

    return area
}

function calculate_radius_square(radius) { //breakdown of main function ie simplified fn
    let square = radius * radius

    return square
}

let circle_area = calculate_area(3.14, 3)

console.log("The area is : " + circle_area)

function print_user_profile(username, first_name, eudcation_level, specialization, city, 
    address, province, country) {
        print_basic_info(username, first_name)
        print_educational_info(eudcation_level, specialization)
        print_address_info(address, city, province, country)
    }

function print_address_info(address, city, province, country) {
    let address_info = address + " " + city + " " + province + " " + country

    console.log(address_info)
}

function print_basic_info(username, first_name) {
    console.log(username + " " + first_name)
}

function print_educational_info(education_level, specialization) {
    console.log(education_level + " " + specialization)
}

print_user_profile("sohailb", "sohail", "Masters", "IT", "Calgary", "Castleridge", "AB", "CA")