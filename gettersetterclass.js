class Employee{
    constructor(name,dept, salary){
        this.name = name;
        this.dept = dept;
        this.salary = salary;         
    }   
    get name(){
        return this._name;  
    }   
    set name(value){
        this._name = value;  
    }   
    getName() {
        return this.name;
    }
    setName(name) { 
        this.name = name;
    }   
    setDept(dept) {
        this.dept = dept;
    }   
    getDept() {
        return this.dept;
    }   
    setSalary(salary) {
        this.salary = salary;
    }   
    getSalary() {
        return this.salary;
    }       
    displayEmployee() {
        console.log(`Name: ${this.name}, Department: ${this.dept}, Salary: ${this.salary}`);
    }   
    static getCompanyName() {
        return "Naeuda Solutions Inc.";
    }   
}
let emp = new Employee("Riyaz", "Development", 50000);  
emp.displayEmployee(); // Output: Name: Riyaz, Department: Development, Salary: 50000
console.log("Company Name: " + Employee.getCompanyName()); // Output: Company Name: Naeuda Solutions Inc.
emp.setName("Umar");    
emp.setDept("Testing");
emp.setSalary(60000);
// emp.displayEmployee(); // Output: Name: Umar, Department: Testing, Salary: 60000    
// console.log("Updated Name: " + emp.getName()); // Output: Updated Name: Umar    
// console.log("Updated Department: " + emp.getDept()); // Output: Updated Department: Testing
// console.log("Updated Salary: " + emp.getSalary()); // Output: Updated Salary: 60000
// // Example of using getters and setters
 let emp2 = new Employee("Alice", "HR", 70000);  
// emp2.displayEmployee(); // Output: Name: Alice, Department: HR, Salary: 70000
// using setter and getter methods
emp2.name = "Bob"; // Using setter
emp2.dept = "Finance"; // Using setter      
emp2.salary = 80000; // Using setter
emp2.displayEmployee(); // Output: Name: Bob, Department: Finance, Salary: 80000
console.log("Employee Name: " + emp2.name); // Using getter
console.log("Employee Department: " + emp2.dept); // Using getter
console.log("Employee Salary: " + emp2.salary); // Using getter 