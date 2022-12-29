class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.querySelector('#outputFirst');
        this.outputSecond = document.querySelector('#outputSecond');
        this.outputResult = document.querySelector('#outputResult');
    }
    changeFirst(change) {
        this.outputFirst.textContent = change;
    }
    changeSecond(change) {
        this.outputSecond.textContent = change;
    }
    displayResult(result) {
        this.outputResult.value = result;
    }
}