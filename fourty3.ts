//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names and one array with the Great added to
// each magician’s name.


function show_magicians4(magician4: string[]): void{
    magician4.forEach(magicians => console.log(magicians))
}
function make_great2(magician4: string[]): string[] {
return magician4.map(magicians => "the great" + magicians)
}

//define a array of magicians names
let magician4: string[]=["iqra","arsalan","maima"]
let great_magicians5 : string[]= make_great2 ([...magician4]);
//creating a copy using 
 // call show_magiacian4{} to show the orgianal array of magicians name 
 console.log("orgianal magician");
 show_magicians4(magician4)
 // call show magician4{} to show the original array with "the great" aded to each magicians name
 console.log("greate magicians")
 show_magicians4(great_magicians5)







