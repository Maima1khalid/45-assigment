//alien colors#2: choose a colour for an alien as you did in excerice 25,
// and write an if-else chain.
// if alien colors is green, print a statement that the player just earned 5 poits for shooting the green alien

// if the aliens color isn't green, print the statement that the player just earned 10 points. 
//write one version of this programe thats runs the if block and another that runs the else block 
//create a variable
let alien_color2 : string = `green`
//now create a passing consition 
if (alien_color2 === `green`)(
    console.log("congratulation you just earned 5 points for shooting the green alien")
)
 else {
    console.log("congratulations you just earned 10 points for shooting the non green alien")
}
//then create a failing consition 
let alien_color3: string= `red`
if (alien_color3 === `green`) {
    console.log("congratulations you just earned 5 points for shooting the green alien")
}
 else{ 
    console.log("congratulations you just earned 10 points for shooting the non-green alien")
}