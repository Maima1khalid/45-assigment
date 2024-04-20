//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
return `${city}, ${country}`
}
// callig the fuction with three, city country pairs
let city1 :string= city_country(`lahore`,`pakistan`);
let city2: string= city_country(`new york`, `usa`);
let city3: string = city_country(`paris`, `frace`);
// printing the values ruturn by the function
console.log(city1);
console.log(city2);
console.log(city3)




