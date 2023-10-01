// Defining aoptions and fixed values for object property values and
// constant variables for calculations.
const subscriptionOptions = [false, true];
const couponOptions = [false, true];
const subDiscountValue = 0.25;
const coupDiscountValue = -10;

// Defined patients data/profile's key:value pairs.
const timmy = {
  fname: "Timmy",
  lname: "Turner",
  patientsDoctor: "Dr. Pepper",
  prescription: "acetaminophen",
  pricePerRefill: 100,
  refills: 3,
  refillsRemaining: 2,
  subscription: subscriptionOptions[0],
  coupon: couponOptions[1],
};
const sarah = {
  fname: "Sarah",
  lname: "Silverstein",
  patientsDoctor: "Doc. Ock",
  prescription: "diphenhydramine",
  pricePerRefill: 100,
  refills: 1,
  refillsRemaining: 2,
  subscription: subscriptionOptions[1],
  coupon: couponOptions[0],
};
const rocky = {
  fname: "Rocky",
  lname: "Balboa",
  patientsDoctor: "Dr. Jane Foster",
  prescription: "phenylephrine",
  pricePerRefill: 100,
  refills: 5,
  refillsRemaining: 4,
  subscription: subscriptionOptions[1],
  coupon: couponOptions[1],
};
const dave = {
  fname: "Dave",
  lname: "Mailloux",
  patientsDoctor: "Dr. Strange",
  prescription: "idarucizumab",
  pricePerRefill: 100,
  refills: 10,
  refillsRemaining: 1,
  subscription: subscriptionOptions[0],
  coupon: couponOptions[0],
};

// Defining Search Value Field for testing purposes.
let searchName = rocky;

// Search value pulled from HTML page.
// document.getElementById('add-name').value = searchName;

// Defining new changable vairables for ease of use in future functions
let prescription = searchName["prescription"];
let price = searchName["pricePerRefill"];
let numRefill = searchName["refills"];
let numRefillsRemaining = searchName["refillsRemaining"];
let sub = searchName["subscription"];
let coup = searchName["coupon"];
let finalPrice;

// Function Determining if Patient is authorized to have their prescription refilled.

function refillAuthorization() {
  if (numRefillsRemaining > 0) {
    numRefillsRemaining = numRefillsRemaining - 1;
    return numRefillsRemaining && applySubCoupDiscount();
  } else {
    // return `${searchName.fname} ${searchName.lname} is out of refills. Patient should reach out to ${searchName.patientsDoctor} to get their prescription updated.`;
    return alert(
      "${searchName.fname} ${searchName.lname} is out of refills. Patient should reach out to ${patientsDoctor} to get their prescription refill updated."
    );
  }
}

// Function Determining if Patient has a Subscription OR Coupon
// in order to apply a 25% (subscription) OR $10 (Coupon) discount torwards the final
// price of their prescription.

function applySubCoupDiscount() {
  if (sub === true && coup === true) {
    const finalPrice = price * (1 - subDiscountValue) + coupDiscountValue;
    return finalPrice && finalResult(finalPrice);
  } else {
    return applySubDiscount();
  }
}
function applySubDiscount() {
  if (sub === true && coup === false) {
    const finalPrice = price * (1 - subDiscountValue);
    return finalPrice && finalResult(finalPrice);
  } else {
    return applyCoupDiscount();
  }
}
function applyCoupDiscount() {
  if (sub === false && coup === true) {
    const finalPrice = price + coupDiscountValue;
    return finalPrice && finalResult(finalPrice);
  } else {
    const finalPrice = price;
    return finalPrice && finalResult(finalPrice);
  }
}


/* SWITCH:CASE TO OPTIMIZE PROGRAM:


function priceCalc(sub, coup) {
  switch (sub, coup) {
    case (sub === true && coup === false):
      finalPrice = (price * (1 - subDiscountValue)) && finalResult(finalPrice);
      break;
    case (sub === false && coup === true):
      finalPrice = price + coupDiscountValue && finalResult(finalPrice);
      break;
    case (sub === true && coup === true):
      finalPrice = ((price * (1 - subDiscountValue)) + coupDiscountValue) && finalResult(finalPrice);
      break;
    default:
      (sub === false && coup === false);
      finalPrice = price && finalResult(finalPrice);
      break;
  };
};

*/


// This triggers the code that evealuates whether or not the patient has any refills remaining &&
// what the cost will be based on if they are holding a subscription, coupon, both, or neither.
console.log(refillAuthorization());

// After having called on the refillAuthorization function and having updated the refillsRemaining
// variable and it's corresponding object's value.
searchName.refillsRemaining = numRefillsRemaining;

// Final function that can be called on to run the whole script with the results from the
// refillsAuthorization() function and all cascading functions and its updated variable and
// object value.
function finalResult(finalPrice) {
  return `${searchName.fname} ${searchName.lname} has ${searchName.refillsRemaining} refills remaining. Grand total is $${finalPrice}`;
}

console.log(finalResult());