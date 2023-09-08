const accountId = 12345
let accountEmail = "anurag@google.com";
var accountPassword = 34556;
let accountState;

accountCity = "Kolkata";
// accountId = 2; not allowed

accountEmail = "anurag@amazon.com"; 
accountPassword = 2344;
accountCity = "Mumbai";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


// Notes:
// 1) Prefer not to use var as it has issues in block scope and functional scope.
// 2) We can even use a variable without declaring it beforehand, but it is not considered as a good 
//    practice.
// 3) If we left a varibale undefined, then javascript will consider it as Same. 


