/*
* Conditionals, functions, scope, and loops
*/

/*CONDITIONALS
 ................................................*/

// Equals, making two values the same. Note the triple equal sign prevents weakly typed languages from converting types as to compare them
// and ignore that they are different types. To ignore types you use two = signs.
let equals = 1 === '1';
console.log(equals);
// Greater than, makes sure that one is larger than the other
let greaterThan = 5 > 1;
//Less than
let lessThan = 2 < 10;
// Greater than or eq
let greaterThanEq = 5 >= 5;
//Less than or eq
let lessThanEq = 4 <= 9;
//Not equals
let notEquals = 5 !== 2;

//
let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

//IAn "If" block will work better. Tis a control statement for controlling flow of program.
if (storeAIsLower) {
	console.log("Store A has a lower price.")
} else if (storeB < storeA){
	console.log("Store B has a lower price.")
} else {
	console.log("Their prices are equal.")
}
//The else if (storeB < storeA) insures that storeB isn't listed as less than storeA when in fact
//they are equal (which is also where the 2nd else statement comes in.

/*FUNCTIONS
...................................................... */
//Wouldn't want to copy and paste all the conditionals, so have functions to reuse a code multiple times.
function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}
compareStorePrices(10,5);
compareStorePrices(7,10);
//this compareStorePrices calls the function for different values and is much cleaner than copying and pasting all the code over and over.

//square a number...
function squareNum (number) {
	return number * number;
}
//If ran just the next line, nothing would happen so we use let...
// squareNum(4);
let squaredNumber = squareNum(4);
console.log(squaredNumber);
//Funcitons should generally be no longer than 20 lines of code and have one task/purpose.
//If instead of just squaring the number above we also subtracted a number, then it would be
// confusing as to what the purpose of the function is. To think about this in another way
//If you have to use the word AND to describe what a function is doing, it may
//be doing too many things at once.

/*SCOPE
.....................................................*/
//Certain values and variables are only accessible in certain areas of code.
//Use descriptive variable names, not single letters for variables.
let x = 10;

function addNumbers (n, m) {
	console.log(x);
	return n + m;
}
 addNumbers(2,3); //this returns 10 which is the global value of x.
//n & m are on the function addNumbers scope, whereas x is on the global (highest level) scope. If console.log(n) it will show up as undefined.
//Third level of scope is block scope such as with if statements. \
//In the example below, the if block wouldn't normally show the value of b if you console log the value of b outside the if block. It would be undefined.
//However,if you want to use the value of b outside the if block you have to declare it's value outside of the if block. Becasue of lexical scoping we still have access to it as it
// enters the if block.
function addNumber (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		b = 9;
	}
	console.log(b);
	return n + m;
}
addNumber (1,2,10)
/*Arrays
.....................................................*/
//Type of data structure. Indexes reference positions within the array starting at 0. Create array with [].
//INDEX #       0, 1, 2, 3, 4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
console.log(ourArray[4][1]);
//console.log(ourArray[4][1]); equivalent to...
//let newArr = ourArray[4];
//console.log(new[0]);

//Typing out every single index is cumbersome so therefore we use...

/*Loops
..............................................*/
//Structure that repeats a section of code until a condition is met.
/*3 elements of for loops:
for(counter; comparison; incrementer) {
}
 */
let arrLen = ourArray.length;
for (let i = 0; i<arrLen; i++) {
	// console.log("i is equal to: i")
	console.log(ourArray[i]);
	//bellow would put a loop within a loop (for (let i =0)). The inner loop will do it's loops for every time that the outter loop executes. This can become a serious problem because it can quickly get out of hand.
	// for (let i = 0; j<10; j++) {
	// 	console.log('j is equal to: ' + j');
	// }
}
//If you wanted to include the number you are comparing against you use an equals operator in the comparison element of the for loop.

//While Loops
//This 1st one would run indefinitely because true never becomes false.
/*
while (true) {
	console.log('Ran');
}
*/
//
let z = 0;
while (z < 10) {
	console.log('Ran');
	z = z + 1;
}
//The incrementer must go inside the while loop.
//It's easy to create an infinite loop that will cause it to crash.