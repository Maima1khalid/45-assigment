//task twelve
//greetings: start with the array you used in the excercise 11, but instead of just printing each persons
//name print a massage to them. the text of each massage should be the same but each massage should be 
//personalize with the persons name
var name2 = ["iqra", "arsalan", "maima", "muskan"];
// print personalize massage to each friend
name2.forEach(function (name) {
    console.log("dear,".concat(name, " have a great day"));
});
