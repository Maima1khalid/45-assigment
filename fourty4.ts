//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.

function orderSandwhich(...items: string[]): void{
     console.log("you ordered a sandwhich with the following items:");
     items.forEach(item => console.log("   "+ item));
     console.log("enjoy your sandwhich")
}

//call the funcion with different number of arguments each time


orderSandwhich(`bread`,`tomato`,`mayo`);
orderSandwhich("garlic","tomato","mayonese","onion")
orderSandwhich("peanut","butter","jelly")

