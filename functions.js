// function greetings(name){
//     console.log("Hello Mr./Ms. " + name + ", welcome to the JavaScript world!");
// }
// function farewell(name){
//     console.log("Goodbye Mr./Ms. " + name + ", see you next time!");
// }
// function add(a, b){ 
//     return a + b;
// }
// //calling the functions
// greetings("Riyaz");
// farewell("Riyaz");
// console.log("The sum of 5 and 10 is: " + add(5, 10)); // Output: The sum of 5 and 10 is: 15
// console.log("The sum of 20 and 30 is: " + add(20, 30)); // Output: The sum of 20 and 30 is: 50

// function test(name){
//     console.log(`Hello, ${name}! This is a test function.`);
//      n = name;   // This will create a global variable n
// }
// gvar = "Umar";
// test(gvar);
// console.log("local variable n is: " + n); // Output: local variable n is: Umar
// another example
/*function printNaturalnos(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
    console.log(i);
}
printNaturalnos(); */// Output: 1 2 3 4 5 6
// optional arguments function 
function greet(name, greeting = "Hello",x) {
    console.log(`${greeting}, ${name}!`);
}   
//greet();
greet("Alice"); // Output: Hello, Alice!
