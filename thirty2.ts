//Checking Usernames: Do the following to create a program that simulates how websites ensure that 
//everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. 
//If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[]=["iqra","arsalan","maima","muskan","waniya"]
let new_users: string[]=["faizan","talha","usman","hamza","huzaifa"]
for (let newusername of new_users){
    //convert both the new usernames and existing username to lowercase for case-insen
    let lowercase_newusername = newusername.toLowerCase();
    let found= false;

    //check if the lowercase version of new usernames exist in the current users a;
    for (let existing_usernames of current_users){
        if (existing_usernames.toLowerCase()=== lowercase_newusername){
            found=true;
            break;
        }
    }
    //print massages based on whether the username is available or not
    if (found){
        console.log (`Username ${newusername} is not avalaible please enter a new us`)
    }else{
        console.log(`username ${newusername} is avaibale`)
    }
}

