console.log("=============== CLASSES SECTION===============")
// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

CuboidMaker.prototype.volume = function (){
    console.log(`The volume for this CuboidMakeer is ${this.length * this.height * this.width}.`)
}

CuboidMaker.prototype.surfaceArea = function(){
    console.log(`The surface area for this CuboidMaker is ${2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height))}`);
  }
*/
class CuboidMaker{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        console.log(`The volume for this CuboidMakeer is ${this.length * this.height * this.width}.`);
    }
    surfaceArea(){
        console.log(`The surface area for this CuboidMaker is ${2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height))}`);
    }
}
const cuboid = new CuboidMaker(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("The answer to CLASSES task 1 is:(see below) ")
cuboid.volume(); // 100
console.log("");
console.log("The answer to CLASSES task 2 is:(see below) ")
cuboid.surfaceArea(); // 130
console.log("");
console.log("====================Stretch Below====================")
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttrs){
        super(cubeAttrs);
        this.length = cubeAttrs.length;
        this.width = cubeAttrs.width;
        this.height = cubeAttrs.height;
    }
    cubeSurfaceArea(){
        console.log(`The surface area of this cube is ${6*(Math.pow(this.length, 2))}.`)
    }
    cubeVolume(){
        console.log(`The volume of this cube is ${Math.pow(this.length, 3)}`)
    }
}
const newCube = new CubeMaker({length:5, width: 5, height:5});
console.log("The answer to CLASSES STRETCH task 1 is " , newCube);
console.log("");
console.log("The answer to CLASSES STRETCH task 2 is:(see below) ")
newCube.cubeSurfaceArea();
console.log("");
console.log("The answer to CLASSES STRETCH task 3 is:(see below) ")
newCube.cubeVolume();