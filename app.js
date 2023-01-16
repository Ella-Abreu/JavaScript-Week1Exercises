/*
//Numer Exercise 1:
let myAge = 32;
console.log(myAge);

//Number exercise 2 - Sums with Variables:
let numberOfRabbits = 2;
let result = (3 * numberOfRabbits);
console.log(result);

//Number Exercise 3 - BODMAS:
let bodmasExample = 3;
let result2 = ((bodmasExample + 5 )/ 6);
console.log(result2)

//Number Exercise 4:
let randomNumber = (Math.floor(Math.random() * 6) + 1);
console.log(randomNumber);

//String Exercise 1:
const myCountry = ("England");
console.log(myCountry);

//String Exercise 2 - String Length:
console.log(myCountry.length);

//String Exercise 3 - Upper Case:
let favouriteFood = ("Seafood Linguine");
console.log(favouriteFood.toUpperCase());

//String Exercise 4 - Lower Case:
console.log(favouriteFood.toLowerCase());

//String Exercise 5 - Concatenation:
const myName = prompt('What is your name?');
console.log(`Hello, my name is ${myName} and I am ${myAge} years old`);

//String Exercise 6 - Template Literals:
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
let text = `Welcome ${firstName} ${lastName},
How can I help you?`;
console.log(text);

//Strings II Exercise - Find and Replace:
function findAndReplace(str, before, after) {
    let message= 'Welcome to Americana, please make your selection followed by the dollar sign now.';
    return message.replace('dollar', 'pound');
};

console.log(findAndReplace ());

//Control Flow Exercise 1 - Password Check:
let myPassword = 'GenericPassword';
if (myPassword.length > 7) {
    console.log(true);
}  else {console.log(false) ;
}

//Control Flow Exercise 2 - Height Test:
let myHeight = 172;
if (myHeight >= 150) {
    console.log("You can go on the ride");
} else if (myHeight <150) {
    console.log("Sorry you are not tall enough");
} else if (myHeight != Number) {
    console.log("Please enter a number");
} 

//If Statement Project - Dice Prize:
function throwDice (one, two) {
    let dieOne = (Math.floor(Math.random() * 6) + 1);
    console.log(dieOne);
    let dieTwo = (Math.floor(Math.random() * 6) + 1);
    console.log(dieTwo);
    if (dieOne == 6 && dieTwo == 6) {
        console.log("Congratulations! You win top prize - a bear!");
    } else if (dieOne == dieTwo && dieOne != 6 && dieTwo != 6)  {
        console.log("Congratulations! You win three free throws!");
    } else if (dieOne % 2 == 0 || dieTwo % 2 == 0) {
        console.log("Congratulations! You win one free throw!");
    } else {
        console.log("You lose the game.")
    }
}

throwDice();

//Functions Exercise 1 - Simple Function:
function myFunction (){
    console.log("Hello World!");
}

myFunction();

//Functions Exercise 2 - Quadrupler:
function quadrupler(par1) {
    console.log(par1 * 4);
}

quadrupler(8);

//Functions Exercise 3 - Welcome Message:
function welcome(firstName, lastName) {
        console.log(`Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can I help you?`)
}

welcome("Ella", "de Abreu");

//Function Exercise 4 - Temperature Converter:
function temperatureConverter (farenheit) {
    console.log((farenheit - 32) * 5/9);
}

temperatureConverter(30);

//Function Exercise 6 - Calculator:
function calculator(par1, par2, par3) {
    if (par1 && par3 == NaN) {
        console.log("Error");
    }
    if (par2 != "+", "-", "*", "/") {
        console.log("Error");
    }
    if (par2 == "+") {
        console.log(par1 + par3);
    }
    else if (par2 == "-") {
        console.log(par1 - par3);
    }
    else if (par2 == "*") {
        console.log(par1 * par3);
    }
    else if (par2 == "/") {
        console.log(par1 / par3);
    }
}

calculator(12, "*", 2);

//Function Exercise 7 - Less than:
function min(par1, par2) {
    if (par1 > par2) {
        return(par1);
    }
    if (par1 < par2) {
        return (par2);
    }
}

console.log(min(9, 12));

//Function Exercise 8 - Powers:
function pow(par1, par2) {
    return(par1**par2);
}

console.log(pow(6, 6));
/*
