//task 3
//name cases: store a person's name in a variable , and then print the person's name becuase lowercase,

import { totalmem } from "os";

//uppercase and a title case.
let personn_ame: string="maima"
console.log ("lowercase:" + personn_ame .toLowerCase());
console.log("uppercase:" + personn_ame .toUpperCase());
let titlecase = personn_ame[0].toUpperCase() + personn_ame.slice(1).toLowerCase();
console.log("titlecase:" + titlecase )
//camelcase personn_ame
