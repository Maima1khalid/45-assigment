//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
//message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

function make_shirt_2(size: string= "large" , massage: string= "i love typescript"): void{
    console.log(`you have ordered a ${size}, sized shirt with the massage: ${massage}`)
}
//callimg the function 
make_shirt_2("large",`i love typesript`);
//create a medium shirt with the default massage
make_shirt_2("medium", `i love typescript`)
//create a shirt of my size with a different massage 
make_shirt_2("small, keep calm and code on!")
