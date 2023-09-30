const subscriptionOptions = [false, true];
const couponOptions = [false, true];
const subDiscountValue = 0.25;
const coupDiscountValue = -10;

const timmy = {
  fname: "Timmy",
  lname: "Truner",
  patientsDoctor: "Dr. Pepper",
  prescription: "acetaminophen",
  pricePerRefill: 25,
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
  pricePerRefill: 50,
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
  pricePerRefill: 30,
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
  pricePerRefill: 75,
  refills: 10,
  refillsRemaining: 2,
  subscription: subscriptionOptions[0],
  coupon: couponOptions[0],
};

// Defining Search Value Field for testing purposes.
let searchName = "dave";

// Search value pulled from HTML page.
// document.getElementById('add-name').value = searchName;

// Defining new changable vairables for ease of use in future functions
let prescription = searchName["prescription"];
let price = searchName["pricePerRefill"];
let numRefill = searchName["refills"];
let numRefillsRemaining = searchName["refillsRemaining"];
let sub = searchName["subscription"];
let coup = searchName["coupon"];
let finalPrice = "";

// Function Determining if Patient is authorized to have their
// prescription refilled.
function refillAuthorization() {
  if (numRefillsRemaining >= 1) {
    numRefillsRemaining -= 1;
    return numRefillsRemaining && applySubCoupDiscount();
  } else {
    console.log("no more drugs for you");
    // alert('${searchName.fname} ${searchName.lname} is out of refills. Patient should reach out to ${patientsDoctor} to get their prescription refill updated.');
  }
}

// Call on refillAuthorization function and update refillsRemaining variable and
// it's corresponding object's value.
searchName["refillsRemaining"] = numRefillsRemaining;

// Function Determining if Patient has a Subscription OR Coupon
// in order to apply a 25% (subscription) OR $10 (Coupon) discount torwards the final
// price of their prescription.
function applySubCoupDiscount() {
  if (sub === true && coup === true) {
    const finalPrice = price * (1 - subDiscountValue) + coupDiscountValue;
    return finalPrice;
  } else {
    return applySubDiscount();
  }
}
function applySubDiscount() {
  if (sub === true && coup === false) {
    const finalPrice = price * (1 - subDiscountValue);
    return finalPrice;
  } else {
    return applyCoupDiscount();
  }
}
function applyCoupDiscount() {
  if (sub === false && coup === true) {
    const finalPrice = price + coupDiscountValue;
    return finalPrice;
  } else {
    const finalPrice = price;
    return finalPrice && finalResult();
  }
}

// Final function that can be called on to fun the whole program.
function finalResult() {
  return `${searchName.fname} ${searchName.lname} has ${searchName.refillsRemaining} refills remaining. Their grand total is $${refillAuthorization()}`;
}

// console.log(finalResult());
// console.log(searchName);
console.log(finalResult());
