//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure 
//all the information was stored correctly.


interface car {
    manufacturer: string;
    modelname: string;
    [key: string]: any;  //allow any additional properties
}

function carinformation(manufacturer: string, modelname: string, options: Partial<car>):  car{
    return{
        manufacturer: manufacturer,
        modelname: modelname,
        ...options
    }
}

//call the function with required information and additinals name value parts
let car= carinformation(`toyota`,`corolla`,{  colour: `blue`, year: 2022});
//ptint the return object


console.log(car);


