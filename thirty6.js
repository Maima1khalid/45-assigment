//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the size 
//of the shirt and the message printed on it. Call the function.
function make_shirt(size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = "keep calm and code on!"; }
    console.log("you have ordered ".concat(size, ". sized shirt with the massage ").concat(massage));
}
// calling the function
make_shirt();
