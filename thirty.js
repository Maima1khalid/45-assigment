//hello admin: make a array of five or more usernames,
// including the name `admin` imagine you are writing code that will print a greeting to each user
//after they log into website. loop through the array, and print a greeting to each user:
// if the username is 'admin', print a special `greeting`
//such as hello admin, would you like to see a status report?
//otherwise print a generic greeting, such as hello eric thank you for loging in again
var usernames = ["iqra", "arsalan", "maima", "waniya", "faizan"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("hello admin, would you like to see a status report");
    }
    else {
        console.log("hello, ".concat(username, " thank you for logging in again"));
    }
}
