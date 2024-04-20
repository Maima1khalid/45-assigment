//shrinking guest list: you just foud out that your new dinner table won't arive in time for the dinner,
//and you have space for only guest 
//start with your program from excercise 16. Add a new line that prints a massage saying that you can invite
//only 2 people for the dinner
//remove guest from your list one at a time until only two names remain on your list. each time you pop
// a name from your list, print a massage to that person letting them know you're sorry you can't invite
//invite to the dinner
// print a massage to each of the two people still on your list, lettig them know they are still invited
// remove the last two names so you have the empty list. print your last to make sure you actually have an 
//empty list at the end of your program 

// copy excercise 16
let guestlist3 = ["iqra", "arsalan", "maima"];
let canNotCome1 = "iqra";
console.log(canNotCome1 + " " + "can't make the dinner");
let person1 = "waniya";
guestlist3[guestlist3.indexOf(canNotCome1)] = person1;
guestlist3.forEach(name => {
    console.log(`dear ${name},\n i found a bigger diner so i invited more guest`);
});
//beiginig guest
let name_1 = "faizan";
//unshift isliye use hota jab apnay begining me kch print krwana ho
guestlist3.unshift(name_1);
console.log(guestlist3);
//middle guest
let names_2 = "maheen";
let ind_ex = guestlist3.length / 2;
guestlist3.splice(ind_ex, 0, names_2);
console.log(guestlist3);
//end guest
let names_3 = "talha";
guestlist3.push(names_3);
console.log(guestlist3);
//now print one more massage to each guest
guestlist3.forEach(name => {
    console.log(`dear ${name} you are invited for the dinner`);
});
//print first line of excercise 17
console.log("I HAVE SPACE FOR ONLY TWO GUESTS")
//remove your guest by using while loop and pop
console.log(guestlist3)
while(guestlist3.length>2){
    let removePerson=guestlist3.pop()
//print a massage for those who can't invite
console.log(`dear, ${removePerson} sorry i can't invite for a diner`)}
//print massage for those who are still invite
guestlist3.forEach(name=>{
    console.log(`dear, ${name} you are still ivited for the dinner`)
})
//creat empty list and print it
guestlist3.pop()
guestlist3.pop()
console.log(guestlist3)