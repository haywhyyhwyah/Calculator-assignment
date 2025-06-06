function multiply() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const product = firstNumber * secondNumber
    console.log(product);
    answer.value = product
}

function subtraction() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const product = firstNumber - secondNumber
    console.log(product);
    answer.value = product
}

function addition() {
    const firstNumber = parseInt(numberOne.value);
    const secondNumber = parseInt(numberTwo.value);
    const product = firstNumber + secondNumber
    console.log(product);
    answer.value = product
}

function division() {
    const firstNumber = numberOne.value;
    const secondNumber = numberTwo.value;
    const product = firstNumber / secondNumber
    console.log(product);
    answer.value = product
}