// // // // // // // // let score = 61;

// // // // // // // // if(score >= 90){
// // // // // // // //     console.log("Grade A");
// // // // // // // // } 
// // // // // // // // else if(score > 80 && score <= 89){
// // // // // // // //     console.log("Grade B");
// // // // // // // // }
// // // // // // // // else if (score > 70 && score <= 79) {
// // // // // // // //     console.log("Grade C");
// // // // // // // // }
// // // // // // // // else if (score > 60 && score <= 69) {
// // // // // // // //     console.log("Grade D");
// // // // // // // // } 
// // // // // // // // else {
// // // // // // // //    console.log("Grade F"); 
// // // // // // // // }
// // // // // // // let country = "Pakistan"
// // // // // // // let age = 25
// // // // // // //     if (country === "Pakistan") {
// // // // // // //     if (age >=30) {
// // // // // // //         console.log("Here is your ticket")
// // // // // // //     } else {
// // // // // // //         console.error("Age Restriction")
// // // // // // //     }
// // // // // // // }   else    {
// // // // // // //     console.log("Invalid Country")
// // // // // // // }

// // // // // // Parameter type annotation
// // // // // // function greet (name: string) {
// // // // // // console.log("Hello, " + name.toUpperCase() + "!!");
// // // // // // }

// // // // // let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
// // // // // // console.log(fruits);

// // // // // Available items at the supermarket with their prices
// // // // // const supermarketItems = {
// // // // //     apple: 2,
// // // // //     banana: 1.5,
// // // // //     orange: 3,
// // // // //     grapes: 4,
// // // // //     strawberry: 2.5
// // // // //   };
  
// // // // //   // Initializing an empty cart
// // // // //   let cart = [];
  
// // // // //   // Simulating the shopping experience
// // // // //   console.log("Welcome to the supermarket!");
  
// // // // //   let shopping = true;
  
// // // // //   while (shopping) {
// // // // //     console.log("\nAvailable items:");
// // // // //     console.log(supermarketItems);
  
// // // // //     const userChoice = prompt("Enter the item you want to buy (or type 'done' to finish shopping):");
  
// // // // //     if (userChoice.toLowerCase() === "done") {
// // // // //       shopping = false;
// // // // //     } else if (supermarketItems.hasOwnProperty(userChoice)) {
// // // // //       cart.push(userChoice);
// // // // //       console.log(`${userChoice} added to your cart.`);
// // // // //     } else {
// // // // //       console.log("Sorry, that item is not available.");
// // // // //     }
// // // // //   }
  
// // // // //   // Calculating the total cost
// // // // //   let totalCost = 0;
  
// // // // //   for (let item of cart) {
// // // // //     totalCost += supermarketItems[item];
// // // // //   }
  
// // // // //   // Displaying the final bill
// // // // //   console.log("\nItems in your cart:");
// // // // //   console.log(cart);
// // // // //   console.log(`Total cost: $${totalCost.toFixed(2)}`);
// // // // //   console.log("Thank you for shopping with us!");

// // // // let country = "Pakistan"
// // // // let age = 25
// // // //     if (country = "Pakistan") {
// // // //     if (age >=30) {
// // // //         console.log("Here is your ticket")
// // // //     } else {
// // // //         console.error("Age Restriction")
// // // //     }
// // // // }   else    {
// // // //     console.log("Invalid Country")
// // // // }

// // // function add(x: number, y: number): number {
// // //     return x + y;
// // // }

// // // // Calling the function
// // // const result: number = add(5, 3); // result will be inferred as a number

// // // // Function with specified input types and return type
// // // function greet(name: string): string {
// // //     return `Hello, ${name}!`;
// // // }

// // // // Calling the greet function
// // // const greeting: string = greet('John'); // greeting will be inferred as a string

// // // // Function with complex types
// // // function processArray(arr: number[]): number {
// // //     return arr.reduce((sum, num) => sum + num, 0);
// // // }

// // // // Calling processArray function
// // // const arraySum: number = processArray([1, 2, 3, 4]); 

// // function greet(name: string) {
// //     console.log("Hello, " + name.toUpperCase() + "!!");

// //     }

// let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
// console.log(fruits);
    
// let fruits: string[] = ['apple', 'banana', 'orange'];
// let firstFruit: string = fruits[0]; // Accessing the first element ('apple')
// console.log(fruits);

let num1: number = 45;
var num2: number = 54;
const num3: number = 60;

let bool: boolean = true;

num2 = 50;

function num() {
    var num3 = 56;
    if (num1 === 45) {
        console.log(num3);
    }
    console.log(num3);
}

// let num1: number = 60;
// var num2: number = 54;

// let bool: boolean = true;

// function num(num3: number) {
//     if (num3 === 45){
//         console.log(num2);
//     } else {
//         console.log(num);
//     }

// }
// num(45);