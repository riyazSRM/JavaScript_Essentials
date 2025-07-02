class Student{
    //let name;
    //var age;
    constructor(name,age){
        this.name = name;
        this.age = age;         
        this.email = "test@niit.com"; // Optional property
    }
    displayStudent(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log("This is a simple class in JavaScript.");
        console.log("Name = " + this.name);
        console.log("Age = " + this.age);
    }   
}
//create an object of the Student class 
let std1 = new Student("Riyaz", 25);
std1.displayStudent(); // Output: Name: Riyaz, Age: 25
console.log("Email: " + std1.email); // Output: Email:

