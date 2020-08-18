/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
console.log("=============== PROTOTYPES SECTION===============")
console.log("")
function CuboidMaker1(length, width, height){
  this.length = length;
  this.width = width;
  this.height = height;
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
CuboidMaker1.prototype.volume = function (){
  console.log(`The volume for this CuboidMakeer is ${this.length * this.height * this.width}.`)
}

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker1.prototype.surfaceArea = function(){
  console.log(`The surface area for this CuboidMaker is ${2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height))}`);
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid1 = new CuboidMaker1(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("The answer to PROTOTYPES task 1 is:(see below) ")
cuboid1.volume(); // 100
console.log("");
console.log("The answer to PROTOTYPES task 2 is: (see below)")
cuboid1.surfaceArea(); // 130
console.log("");