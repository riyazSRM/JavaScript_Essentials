class CountObjects {
    constructor() {
        this.count = 0;
        this.count++;
    }
    static displayCount() {
        console.log(`Current count: ${this.count}`);
    }
}
let a = new CountObjects();
let b = new CountObjects(); 
let c = new CountObjects();
CountObjects.displayCount(); // Output: Current count: 0
// Note: The static method 'displayCount' does not access the instance property 'count'