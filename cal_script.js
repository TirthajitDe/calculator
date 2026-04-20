
const clearBtn = document.querySelector("#clearBtn");

const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", () => {
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operator = document.querySelector("select").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.querySelector("#result").innerText = "Please enter valid numbers";
        return;
    }

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "can't divided by 0";
            } else
                result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;

        default:
            result = "Invalid Operator";
    }

    document.querySelector("#result").innerText = result;


});

clearBtn.addEventListener("click", () => {

    document.querySelector("#num1").value = null;
    document.querySelector("#num2").value = null;

    
    document.querySelector("#result").innerText = 0;

});