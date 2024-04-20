//task sixteen
//more guest: you just found a bigger dinner table, so now more space is available.think of three
// more guest to invite to dinner
//start with your program from excercise 15. add a print statemetto the end of your program informing people
//that you found a bigger diner table
//add one new guest to the begining of your array
// add one new guest to the middle of your array. useappend {} to add one new guest to the end of your 
//list. print a new set of invitation massages, one for each person in your list

//here print your new massage to your invited guest

let guestlist2 : string[]=["iqra","arsalan","maima"]
let canNot_Come: string= "iqra"
console.log(canNot_Come+ " " +  "can't make the dinner")
let per_son : string= "waniya"
guestlist2[guestlist2.indexOf(canNot_Come)]=per_son
guestlist2.forEach(name=> {
    console.log(`dear ${name},\n i found a bigger diner so i invited more guest`)
})
//beiginig guest
let name1: string="faizan"
//unshift isliye use hota jab apnay begining me kch print krwana ho
guestlist2.unshift(name1)
console.log(guestlist2)
//middle guest
let names2: string= "maheen"
let index= guestlist2.length/2
guestlist2.splice(index,0,names2)
console.log(guestlist2)
//end guest
let names3: string= "talha"
guestlist2.push(names3)
console.log(guestlist2)
//now print one more massage to each guest
guestlist2.forEach(name=>{
    console.log(`dear ${name} you are invited for the dinner`)
})