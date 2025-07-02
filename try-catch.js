//let a,b,c;
try {
    a = 10;
    b = 0;
    c = a / b; // This will throw an error because division by zero is not allowed
    console.log("The value of c is:", c); // This line will not execute if an error occurs
} catch (error) {   
    console.error("An error occurred:", error.message); // Handle the error gracefully
}       

// the above not throws an error because JavaScript does not throw an error for division by zero, it simply returns Infinity.
// However, if you want to explicitly throw an error for division by zero, you can do it like this:
try {           
    a = 10;
    b = 0;
    if (b === 0) {
        throw new Error("Division by zero is not allowed"); // Explicitly throw an error
    }
    c = a / b; // This line will not execute if an error is thrown
    console.log("The value of c is:", c);
}
catch (error) {
    console.error("An error occurred:", error.message); // Handle the error gracefully
}
