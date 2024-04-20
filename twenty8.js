//stay ages of life: write an if-else chain that determines a person's stay_age of life
//set a value for the variable my_age, and then
// if the person is less than 2 years old, print a messmy_age that the person is a baby
//if the person is atleast 2 years old but less than 4, print a messmy_age that the person is a todler
//if the person is atleast 4 years old, but less than 13, print a messmy_age that the person is a kid
//if the person is atleast 13 years old and less than 20, pint a messmy_age that the person is a teenay_age
//if the person is atleast 20 years old and less than 65, print a messmy_age that the person is an adult
//if the person is my_age 65 or older, print a messmy_Age that the person is an adult
var my_age = 80;
if (my_age < 2) {
    console.log("i am a baby");
}
else if (my_age >= 2 && my_age < 4) {
    console.log("the person is a todler");
}
else if (my_age >= 4 && my_age < 13) {
    console.log("the person is a kid");
}
else if (my_age >= 13 && my_age < 20) {
    console.log("the person is an teenay_ager");
}
else if (my_age >= 20 && my_age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an adult");
}
