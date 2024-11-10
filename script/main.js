
let billNum = 0;
let tipNUm = 0;
let peopleNUM = 0;
let btnVal = 0

let bill = document.querySelector(".bill")
let tip_num = document.querySelector(".tip_num")
let People_num = document.querySelector(".People_num")
let reset = document.querySelector(".reset")
let all_price = document.querySelector(".all-price")
let amount_price= document.querySelector(".amount-price")
let buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

                btnVal = parseInt(button.value)
                calculate();
    });
});


bill.addEventListener("input",  (e) => {
    billNum = parseFloat(event.target.value);
    calculate();
});

tip_num.addEventListener("input",  (e) => {
    buttons.forEach(btn => btn.classList.remove('active'));
    btnVal = parseFloat(event.target.value);
    calculate();
});

People_num.addEventListener("input",  (e) => {
    peopleNUM = parseInt(event.target.value);
    calculate();
});


function calculate() {
    if(peopleNUM <= 0){
        all_price.innerHTML = "$0.00";
        amount_price.innerHTML = "$0.00";
        People_num.style.cssText = "border: 3px solid red;"
        document.querySelector(".not_zero").style.cssText = "visibility: visible; color: red"
    } else{
        People_num.style.cssText = People_num.style
        document.querySelector(".not_zero").style.cssText = "visibility: hidden;"
        const tipAmount = billNum * (btnVal / 100);
        const total_Person = (billNum + btnVal) / peopleNUM;
    

    all_price.innerHTML ="$" + total_Person.toFixed(2);
    amount_price.innerHTML ="$" +  tipAmount.toFixed(2);
    }

}




reset.addEventListener("click",  (e) => {
    all_price.innerHTML = "$0.00";
    amount_price.innerHTML = "$0.00";
    bill.value= "";
    People_num.value= "";
    tip_num.value = ""
    buttons.forEach(btn => btn.classList.remove('active'));
});











