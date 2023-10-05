
// Step 1 (Part D): Linking block017-workshop.js with block017-index.js
const coffeeMenu = require("./block017-workshop");

/*
 EXAMPLE OF SINGLE DATA SET IN coffeeMenu ARRAY:
    const coffeeMenu = [
        {
            name: "cappuccino",
            price: 8,
            seasonal: false,
        },
    ];
*/

// Objective 2: Print an array of all the drinks on the menu.
// .forEach() Method:

const menuItems = [];
coffeeMenu.forEach(item => menuItems.push(item.name));

console.log(menuItems);



// Objective 3: Print an array of drinks that cost 5 and under.
// .filter() Method:

const underFiveDollars = coffeeMenu.filter(item => item.price <= 5);
console.log(underFiveDollars);



// Objective 4: Print an array of drinks that are priced at an even number.
// .filter() Method:

const evenPrices = coffeeMenu.filter(item => item.price % 2 === 0);
console.log(evenPrices);



// Objective 5: Print the total if you were to order one of every drink.
// .forEach && .reduce() Methods:

const individualDrinkPrices = [];
coffeeMenu.forEach(item => individualDrinkPrices.push(item.price));
// console.log(individualDrinkPrices);

const startingValue = 0;
const priceTotal = individualDrinkPrices.reduce(
    (sum, baseValue) => sum + baseValue,
    startingValue
    );
    
//* To see the adding process of this function step by step:

// const sumOfPrices = individualDrinkPrices.reduce((sum, baseValue) => {
//     console.log(`Sum: ${sum}`);
//     console.log(`baseValue: ${baseValue}`);

//     return sum + baseValue;
// }, 0);
// console.log(sumOfPrices);

console.log(priceTotal);


// Objective 6: Print an array with all the drinks that are seasonal.
// .filter() Method:

const seasonalDrinkMenu = coffeeMenu.filter(item => item.seasonal === true);
console.log(seasonalDrinkMenu);



// Objective 8: Print all the seasonal drinks with the words "with imported
// beans" after the item name. For example: "affogato with imported beans".
// .filter() && .forEach() Method:

const seasonalDrinks = coffeeMenu.filter(item => item.seasonal === true);
// console.log(seasonalDrinks); 
const seasonalMessage = seasonalDrinks.forEach(item => console.log(`${item.name} with imported beans.`));
console.log(seasonalMessage);
