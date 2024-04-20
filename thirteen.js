//task thirteen
//your own array: think of your favourite mode of transportation, such as a motorcycle or a car,
//and make a list that stores several examples use your list to print a series of statements about 
//these items, such as "i would like to own a honda motorcycle"
var transportation = ["car", "van", "bus", "rikshaw", "motorcycle"];
transportation.forEach(function (name) {
    console.log("i would like to own a ".concat(name));
});
