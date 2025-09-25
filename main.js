const input1 = document.querySelector("#firstNuber");
const input2 = document.querySelector("#seccondNumber");
const calculateBtn = document.querySelector("#calculate");
const output = document.querySelector("#result");
let firstNumber;
let secondNumber;
let result;
calculateBtn.addEventListener("click",
    function(){
        firstNumber = input1.value;
         secondNumber = input2.value;
         result = parseInt(firstNumber) + parseInt(secondNumber);
         output.textContent = result;

    }
);