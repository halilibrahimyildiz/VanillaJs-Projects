// Elementleri seçme

const amountElement = document.querySelector('#amount');
const firstSelect = document.querySelector('#firstCurrency');
const secondSelect = document.querySelector('#secondCurrency');
const currency = new Currency('USD', 'TRY');
const ui = new UI(firstSelect, secondSelect);

eventListeners();

function eventListeners() {
    amount.addEventListener('input', exchangeCurrency);
    firstSelect.onchange = function() {
        const firstSelected = firstSelect.options[firstSelect.selectedIndex].textContent;
        currency.changeFirstCurrency(firstSelected);
        ui.changeFirst(firstSelected);
    };
    secondSelect.onchange = function() {
        const secondSelected = secondSelect.options[secondSelect.selectedIndex].textContent;
        currency.changeFirstCurrency(secondSelected);
        ui.changeSecond(secondSelected);
    };
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
    currency
        .exchange()
        .then((result) => ui.displayResult(result))
        .catch((err) => console.log(err));
}