

const number = document.getElementById("number");
const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let temp;

submit.onclick = function(){
    if(CtoF.checked){
        temp = Number(number.value);
        temp = temp*(9/5)+32;
        temp = temp.toFixed(2);
        result.textContent = temp +"℉";
    }
    else if(FtoC.checked){
        temp = Number(number.value);
        temp = (temp - 32)*(5/9);
        temp = temp.toFixed(2);
        result.textContent = temp + "℃";
    }
    else{
        result.textContent = "Select a Unit";
    }

}