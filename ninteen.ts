// dinner guests: working with one of the programs from excercuse 14 through 18 print a massage indicating
// the number f peoples you are inviting to dinner
let guestlist4: string[]=["iqra","arsalan","maima"]
let canNotCome2: string= "iqra"
console.log(canNotCome2+ " " +  "can't make the dinner")
let person4 : string= "waniya"
guestlist4[guestlist4.indexOf(canNotCome2)]=person4
guestlist4.forEach(name=> {
    console.log(`dear ${name},\n you are invited to the dinner`)
});
//begining
let name4: string="faizan"
guestlist4.unshift(name4)
console.log(guestlist4)
//middle
let names5: string= "maheen"
let index1= guestlist4.length/2
guestlist4.splice(index1,0,names5)
console.log(guestlist4)
//ending
let names6: string= "talha"
guestlist4.push(names6)
console.log(guestlist4)
guestlist4.forEach(name=>{
    console.log(`dear ${name} you are invited for the dinner`)
})
console.log(guestlist4.length+" "+ "are invited for a dinner")