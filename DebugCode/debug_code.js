const performOperation = () => {
    // Get user input from input fields
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;

    // Check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){
        let result = multiply(num1, num2);
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

const multiply = (a, b) => {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

const displayResult = (result) => {
    // Display the result in the paragraph element
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}