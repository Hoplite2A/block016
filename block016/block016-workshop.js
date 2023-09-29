const subscriptionOptions = [false, true,];
const couponOptions = [false, true,];
const subDiscountValue = 0.25;
const coupDiscountValue = -10;

const timmy = {
    prescription: 'acetaminophen',
    pricePerRefill: 25,
    refills: 3,
    refillsRemaining: 2,
    subscription: subscriptionOptions[0],
    coupon: couponOptions[1],
};
const sarah = {
    prescription: 'diphenhydramine',
    pricePerRefill: 50,
    refills: 1,
    refillsRemaining: 2,
    subscription: subscriptionOptions[1],
    coupon: couponOptions[0],
};
const rocky = {
    prescription: 'phenylephrine',
    pricePerRefill: 30,
    refills: 5,
    refillsRemaining: 4,
    subscription: subscriptionOptions[1],
    coupon: couponOptions[1],
};

// Defining Search Value Field
let searchName = sarah;

// Defining new changable vairables for ease of use in future functions
let prescription = searchName['prescription'];
let price = searchName['pricePerRefill'];
let numRefilled = searchName['refills'];
let numRefillsRemaining = searchName['refillsRemaining'];
let sub = searchName['subscription'];
let coup = searchName['coupon'];


// Function Determining if Patient is authorized to have their
// prescription refilled.
function refillAuthorization(){
    if (numRefillsRemaining >= 1) {
        numRefillsRemaining -= 1;
        return numRefillsRemaining;
    } else {
        console.log('Patient is out of refills. Patient should reach out to Doctor to set up another appointment.');
    }    
};

// Call on refillAuthorization function and update refillsRemaining variable and 
// it's corresponding object's value.
refillAuthorization();
searchName['refillsRemaining'] = numRefillsRemaining;

// Function Determining if Patient has a Subscription OR Coupon 
// in order to apply a 25% (subscription) OR $10 (Coupon) discount torwards the final 
// price of their prescription.
function applyDiscount() {
    if (refillAuthorization() === true) {
     else if (sub === true && coup === true) {
            const subCoupDisc = ((price * sub) + coup);
            return subCoupDisc;
        } else if (sub === true && coup === false) {
            const subDisc = price * sub;
            return subDisc;
        } else {
            const coupDisc = price + coup;
            return coupDisc;
        }
        const finalPrice = subCoupDisc + subDisc + coupDisc;
        return finalPrice;
    } else {
        return price;
    }
};

applyDiscount();

// Function to generate the final prompt
// 

