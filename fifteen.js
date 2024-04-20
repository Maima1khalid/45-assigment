//task fifteen
//chnaging guestlist: you just heard that one of your guest can't make the dinner, so you need to send 
//out a new set of invitations. you'll have to think of someone else to invite
//start with you program from excercise 14. add a print statement at the end of your program
//stating of the guest whocan't make it.
//modify your list, replacing the name of the guest who can't make it with the name of the new persons
//you are inviting.
//print a second set of inovation massages, one for each person who is still in your still
//repeat an array og "guestlist" with people you'd like to invite the dinner
var guestlist1 = ["iqra", "arsalan", "maima"];
//person who can't attend the dinner
var canNotCome = "iqra";
//now print a massage with person's name 
console.log(canNotCome + " " + "can't make the dinner");
//new person who attend the dinner
var person = "waniya";
//replacing the name into the array
guestlist1[guestlist1.indexOf(canNotCome)] = person;
//now print a massage to all in my list
guestlist1.forEach(function (name) {
    console.log("dear ".concat(name, ",\n you are invited to the dinner"));
});
