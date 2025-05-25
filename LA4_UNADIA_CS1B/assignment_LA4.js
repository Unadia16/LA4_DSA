//UNADIA, AARUME XANDER A.
//BSCS-1B

// Initial queue with 5 customers
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a customer to the queue
function addCustomer(name) {
  queue.push(name); // Add customer name to the end of the queue
  console.log(`Customer ${name} added. Your number is ${queue.length}.`); // Show the number assigned
}

// Function to service a customer by number
function serviceCustomer(number) {
  if (number > 0 && number <= queue.length) {
    let customerName = queue[number - 1]; // Find the customer by number (index + 1)
    console.log(`Now servicing customer number ${number}: ${customerName}`);

    queue.splice(number - 1, 1); // Remove the customer from the queue
    console.log("Updated queue: ", queue);
  } else {
    console.log("Invalid number! Please enter a valid customer number.");
  }
}

// Example usage:

console.log("Initial queue: ", queue);

// Add a new customer named "Maya"
addCustomer("Maya");

// Service customer number 2 (Althea)
serviceCustomer(2);

// Service customer number 1 (Elaine)
serviceCustomer(1);

// Add another customer "John"
addCustomer("John");

// Final queue display
console.log("Final queue: ", queue);

/* 
Reference links:
- https://www.w3schools.com/js/js_arrays.asp (Basic JavaScript arrays and methods)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections (Array operations)
- https://www.geeksforgeeks.org/queue-data-structure/ (Queue data structure concept)
*/
