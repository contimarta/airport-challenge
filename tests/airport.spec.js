const assertEquals  = require(`../testing_framework.js`);
const Airport = require ("../src/airport.js")
const Plane = require ("../src/plane.js")

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Instruct airport to land *something*
console.log(`============================`);
console.log(`Test 1 - Instruct airport to land *something*`);

// Arrange
airport = new Airport();
expected = "You are free to land, I repeat, you are free to land. Over.";

// Act

actual = airport.landPlane()

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something instructed to land: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Instruct airport to land a plane and only a plane
console.log(`============================`);
console.log(`Test 2 - Instruct airport to land a plane`);

// Arrange
airport = new Airport();
plane = new Plane(`3456`)
expected = `${plane.id}, you are free to land, I repeat, you are free to land. Over.`

// Act

actual = airport.landPlane(plane)

// Assert
result = assertEquals(expected, actual);

console.log(`Test 2: Only a plane can be instructed to land: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 3 - Airport capacity can be overriden by a new capacity
console.log(`============================`);
console.log(`Test 3 - Airport capacity can be overriden by a new capacity`);

// Arrange
airport = new Airport(10);
expected = `The new capacity is 10`

// Act

actual = `The new capacity is ${airport.capacity}`

// Assert
result = assertEquals(expected, actual);

console.log(`Test 3: Airport capacity overriden: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4 - Prevent landing when airport is full. Full is 50 planes.
console.log(`============================`);
console.log(`Test 4 - Prevent landing when airport is full. Full is 50 planes.`);

// Arrange
airport = new Airport(60, 50);
expected = `You cannot land, Airport is at capacity`
// Act

actual = airport.isAtCapacity()
// Assert
result = assertEquals(expected, actual);

console.log(`Test 4: No landing when airport is full with 50 planes: ${result}`);

// Clean up
airport = null;
plane= null;
expected = undefined;
actual = undefined;
result = undefined;



