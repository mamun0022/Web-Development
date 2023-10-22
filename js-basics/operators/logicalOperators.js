
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// console.log(true && true);
// console.log(false && true);

let highIncome = false;
let goodCreditScore = true; 
//let eligibleForLoan = highIncome && goodCreditScore;
// Logical OR (Any one true)
let eligibleForLoan = highIncome || goodCreditScore;

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

