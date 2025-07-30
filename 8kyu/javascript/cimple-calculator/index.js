// Kata: cimple-calculator

// Prompt: <PASTE PROMPT HERE>

/* You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
should return "unknown value"

arguments: 1, "k", "*"
should return "unknown value" */

function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "unknown value";
    }
    
    const operations = {
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': a / b
    };
    
    return operations.hasOwnProperty(sign) ? operations[sign] : "unknown value";
  }