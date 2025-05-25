//UNADIA, AARUME XANDER A.
//BSCS-1B


// Hash function to convert a string (customer name) into an index (0-4)
function hashFunction(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    // Add ASCII code of each character to hash
    hash += name.charCodeAt(i);
  }
  // Use modulo 5 to keep index within 0 to 4 (for 5 customers)
  return hash % 5;
}

// Initial empty hash table to store customers, with 5 slots (indexes 0 to 4)
let customerTable = new Array(5).fill(null);

// Predefined customers
const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Store customers using the hash function
for (let i = 0; i < customers.length; i++) {
  let index = hashFunction(customers[i]);
  // If slot is empty, store the customer name
  if (customerTable[index] === null) {
    customerTable[index] = customers[i];
  } else {
    // Handle collision by linear probing: find next empty slot
    let j = (index + 1) % 5;
    while (customerTable[j] !== null && j !== index) {
      j = (j + 1) % 5;
    }
    if (j === index) {
      console.log("Queue is full, can't add more customers.");
    } else {
      customerTable[j] = customers[i];
    }
  }
}

console.log("Initial Customer Queue:");
console.log(customerTable);

// Function to service a customer by number
function serviceCustomer(number) {
  let index = number - 1; // Customer number corresponds to index + 1

  if (index < 0 || index >= 5) {
    console.log("Invalid customer number.");
    return;
  }

  if (customerTable[index] === null) {
    console.log(`No customer found at number ${number}.`);
  } else {
    console.log(`Servicing customer number ${number}: ${customerTable[index]}`);
    // Remove customer from the hash table (queue)
    customerTable[index] = null;
  }

  // Display updated queue after servicing
  console.log("Updated Customer Queue:");
  console.log(customerTable);
}

// Example usage:
// Service customer number 1 (index 0)
serviceCustomer(1);

// Service customer number 3 (index 2)
serviceCustomer(3);

// You can call serviceCustomer(n) with n=1 to 5 to service customers by their number

/*
References:
- Simple Hash Function Example in JS: https://www.freecodecamp.org/news/hash-functions-in-javascript-what-are-they-and-how-to-implement-them-1f4bc84c7e6c/
- Basic Queue Implementation in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- Beginner JS Hash Tables: https://eloquentjavascript.net/04_data.html
*/
