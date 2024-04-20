// alien colours #1: imagine an allien was just shot down in a game. create a variable called allien_color
//and assign it a value of "green" "yellow" or "red"
//write an if the statement to test wheather the alien's color is green. if it is, print the massage that the 
//player earned 5 points 
// write 1 version of this programe that pases the if test and another that fails
//(the version that fails will have no output)

// create variable 
let alien_color: string = `green`
//now create a passing consition 
if (alien_color === `green`){
console.log("you just earned 5 points")
}
//then create failing cosition 
let alien_color1 : string= `red`
if (alien_color1 === `green`){
    console.log("failed")
}