/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/
let a = 13
let b = 9
let c = 0

let name = "Adamus";
let lastName = "Finnell II";
let trafficLight = "red";

function addition() {
  c = a + b
}
addition()

function subtraction() {
  c = a - b
}
subtraction()

function multiplication() {
  c = a * b;
}

multiplication()

function division() {
  c = a / b;
}
division()

function incrementA() {
  a++;
}
incrementA()

function decrementB() {
  b--;
}
decrementB()

function fullName() {
 name + " " + lastName;
}
fullName()
console.log(fullName)

function lightChange() {
  trafficLight = "green";
}
lightChange()
/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof a === 'undefined') {
  a = undefined;
}

if (typeof b === 'undefined') {
  b = undefined;
}

if (typeof c === 'undefined') {
  c = undefined;
}

if (typeof name === 'undefined') {
  name = undefined;
}

if (typeof lastName === 'undefined') {
  lastName = undefined;
}

if (typeof trafficLight === 'undefined') {
  trafficLight = undefined;
}

if (typeof addition === 'undefined') {
  addition = undefined;
}

if (typeof subtraction === 'undefined') {
  subtraction = undefined;
}

if (typeof multiplication === 'undefined') {
  multiplication = undefined;
}

if (typeof division === 'undefined') {
  division = undefined;
}

if (typeof incrementA === 'undefined') {
  incrementA = undefined;
}

if (typeof decrementB === 'undefined') {
  decrementB = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof lightChange === 'undefined') {
  lightChange = undefined;
}

const assert = require('assert');
const { clear } = require('console');

// Mocha tests
describe('Getting Funcy Tests', () => {
  // Test addition function
  it('should correctly add a and b', () => {
      addition();
      assert.strictEqual(c, a + b);
  });

  // Test subtraction function
  it('should correctly subtract b from a', () => {
      subtraction();
      assert.strictEqual(c, a - b);
  });

  // Test multiplication function
  it('should correctly multiply a and b', () => {
      multiplication();
      assert.strictEqual(c, a * b);
  });

  // Test division function
  it('should correctly divide a by b', () => {
      division();
      assert.strictEqual(c, a / b);
  });

  // Test incrementA function
  it('should increment a by 1', () => {
      let val = a
      incrementA();
      assert.strictEqual(a, val + 1);
  });

  // Test decrementB function
  it('should decrement b by 1', () => {
      let val = b
      decrementB();
      assert.strictEqual(b, val - 1);
  });

  // Test fullName function
  it('should set name as first name and last name combined', () => {
      let firstName = name
      fullName();
      
      assert.strictEqual(name, firstName + ' ' + lastName);
  });

  // Test lightChange function
  it('should set trafficLight to green', () => {
      lightChange();
      assert.strictEqual(trafficLight, "green");
  });
});