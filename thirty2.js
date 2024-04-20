//Checking Usernames: Do the following to create a program that simulates how websites ensure that 
//everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. 
//If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["iqra", "arsalan", "maima", "muskan", "waniya"];
var new_users = ["faizan", "talha", "usman", "hamza", "huzaifa"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newusername = new_users_1[_i];
    //convert both the new usernames and existing username to lowercase for case-insen
    var lowercase_newusername = newusername.toLowerCase();
    var found = false;
    //check if the lowercase version of new usernames exist in the current users a;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var existing_usernames = current_users_1[_a];
        if (existing_usernames.toLowerCase() === lowercase_newusername) {
            found = true;
            break;
        }
    }
    //print massages based on whether the username is available or not
    if (found) {
        console.log("Username ".concat(newusername, " is not avalaible please enter a new us"));
    }
    else {
        console.log("username ".concat(newusername, " is avaibale"));
    }
}
