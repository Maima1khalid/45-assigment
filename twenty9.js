//favourite fruit: make a array of your favourite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// make a array of your three favourite  fruits and call it favourite_fruits.
// write five if you statements, each should check wheather a certain kind of fruit in i your array.
//if the fruit is in your array, the if block should print a statement, such as you really like bananas!
//create an array
var favorite_fruits = ["apples", "mango", "banana"];
if (favorite_fruits.includes("banana")) {
    console.log("you really like banana!");
}
if (favorite_fruits.includes("apples")) {
    console.log("you really like apples!");
}
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango!");
}
if (favorite_fruits.includes("orange")) {
    console.log("you really like oranges!");
}
else
    (console.log("oranes are not in your list of favorite fruits"));
if (favorite_fruits.includes("kiwi")) {
    console.log("you really like kiwi's! ");
}
else
    (console.log("kiwi are not incluse in your list of favourite_fruits"));
