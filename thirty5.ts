//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

let animals: string[]=["dog","cat","rabbit"];
//printing just the names of animals
console.log("number of the animelas:");
for (let animal of animals){
    console.log(animal)
}
// printing a statement about each animal
console.log("\n statement about each animal")
for (let animal of animals){
    console.log(`A ${animal.toLowerCase()} would make a great pet`);
}
//additional statement about what these animals have in common
console.log("\n any of these animals would make a great pet!")
