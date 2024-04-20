// more conditional tests: you don't to limits the number of tests you create to 10. if you want
// try more comparisons, write more tests, have atleast one true and one false result for each 
// of the following 
// tests equality and inequality with strings
// tests using the lowercase functions
// numerical tests involving and inequality, greater than and less than, greater than or equal to
// test using  "and" and "or" perators 
// test wheather an item is not in a array
var string1 = "iqra";
var string2 = "maima";
// test for equality and inequality with strings 
console.log("is string1 equal to `hello`? i predict true");
console.log(string1 === string2);
console.log("is string1 not equal to string2? i predict its true");
console.log(string1 !== string2);
//test using the lowercase function 
console.log("is `iqra` equals to `hello` after converting to lowercase? i predict its true");
console.log("IQRA".toLowerCase() === "iqra");
console.log("is `iqra` equals to `hello` after converting to lowercase? i predict its true");
console.log("IQRA".toLowerCase() === "Iqra");
// numeric test involving equality or inequality
var number1 = 10;
var number2 = 20;
console.log("is number1 equal to 10? i predict its true");
console.log(number1 === 10);
console.log("is number1 equal to number2? i predict ture");
console.log(number1 === number2);
console.log("is number1 < number2? i predict true");
console.log(number1 < number2);
console.log("is number1 greater than number2? i predict true");
console.log(number1 > number2);
console.log("is number2 less than or equal to 20? i predict true");
console.log(number2 <= 20);
console.log("is number2 is greater than or equal to 20? i predict true");
console.log(number2 >= 20);
// test using "and" and "or" operators
//create another 2 variable
var bool1 = true;
var bool2 = false;
console.log("is bool1 true and bool2 false? i predict true");
console.log(bool1 && bool2);
console.log("is bool1 false and bool2 is true? i predict true");
console.log(bool1 || bool2);
//test when an item is in an array 
//create an array
var array = [1, 2, 3, 4, 5];
console.log("is 3 in the array? i predict its true ");
console.log(array.includes(3));
console.log("is 6 in the array? i predict its true ");
console.log(array.includes(6));
