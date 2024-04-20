// dinner guests: working with one of the programs from excercuse 14 through 18 print a massage indicating
// the number f peoples you are inviting to dinner
var guestlist4 = ["iqra", "arsalan", "maima"];
var canNotCome2 = "iqra";
console.log(canNotCome2 + " " + "can't make the dinner");
var person4 = "waniya";
guestlist4[guestlist4.indexOf(canNotCome2)] = person4;
guestlist4.forEach(function (name) {
    console.log("dear ".concat(name, ",\n you are invited to the dinner"));
});
//begining
var name4 = "faizan";
guestlist4.unshift(name4);
console.log(guestlist4);
//middle
var names5 = "maheen";
var index1 = guestlist4.length / 2;
guestlist4.splice(index1, 0, names5);
console.log(guestlist4);
//ending
var names6 = "talha";
guestlist4.push(names6);
console.log(guestlist4);
guestlist4.forEach(function (name) {
    console.log("dear ".concat(name, " you are invited for the dinner"));
});
console.log(guestlist4.length + " " + "are invited for a dinner");
