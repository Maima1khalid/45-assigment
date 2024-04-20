//hello admin: make a array of five or more usernames,
// including the name `admin` imagine you are writing code that will print a greeting to each user
//after they log into website. loop through the array, and print a greeting to each user:
// if the username is 'admin', print a special `greeting`
//such as hello admin, would you like to see a status report?

//otherwise print a generic greeting, such as hello eric thank you for loging in again
let usernames: string[]=["iqra","arsalan","maima","waniya","faizan"];

for (let username of usernames) {
    if (username === `admin`){
        console.log("hello admin, would you like to see a status report")
    }else {
        console.log(`hello, ${username} thank you for logging in again`);
    }
}