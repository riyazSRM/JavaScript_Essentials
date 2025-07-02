class a{
    constructor() {
        this.name = "Class A";
        this.display(); // This will not work as 'this' is not defined yet
    }   
    display() {
        console.log("This is " + this.name);
    }   
}
class b extends a {
    constructor() { 
        super(); // Call the constructor of the parent class
        this.name = "Class B"; // Override the name property
    }
    display() {
       // super.display(); // Call the display method of the parent class
        console.log("This is " + this.name);
        //super.name = "Class A"; // Change the name property of the parent class
        //super.display(); // Call the display method of the parent class again
    }   
}
let obj = new b(); // Create an object of class b
obj.display(); // Output: This is Class B
//console.log("Parent class name: " + obj.name); // Output: Parent class name: Class B
console.log("Parent class name: " + obj.__proto__.name); // Output: Parent class name: Class A
//console.log("Parent class name: " + Object.getPrototypeOf(obj).name); // Output: Parent class name: Class A

