//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

//create an array of magicians names
let magicians: string[]= ["iqra","arsalan","maima"]
function show_magician1(magician: string[]): void {
    magicians.forEach(magicians=>
        console.log(magicians)
    )
}

// call the function to show the magicians
show_magician1(magicians);
