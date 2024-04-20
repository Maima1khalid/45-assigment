//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the
// Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 

//create an array magician's names
let magician1: string[]=["iqra","arsalan","maima"];

function show_magicians(magician1: string[]): void {
    magician1.forEach(magician1 =>
        console.log(magician1)
    )
}

function make_great( magician1: string[]): void{
    for(let i=0; i < magician1.length; i++){
        magician1[i] = "the great" + magician1[i]
    }
}


show_magicians(magician1);