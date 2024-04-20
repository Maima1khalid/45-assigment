//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the size 
//of the shirt and the message printed on it. Call the function.

function make_shirt(size: string="large", massage: string="keep calm and code on!"): void {
    console.log(`you have ordered ${size}. sized shirt with the massage ${massage}`)
}
// calling the function
make_shirt("large, keep calm and code on!");
