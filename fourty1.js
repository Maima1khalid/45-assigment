//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
//create an array of magicians names
var magicians = ["iqra", "arsalan", "maima"];
function show_magician1(magician) {
    magicians.forEach(function (magicians) {
        return console.log(magicians);
    });
}
// call the function to show the magicians
show_magician1(magicians);
