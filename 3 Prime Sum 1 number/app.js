const input = document.getElementById('input');
let list = document.getElementsByClassName('list')[0];
const btn = document.querySelector('.btn-calc');
const remove = document.querySelector('.btn-remove');
const listItem = document.getElementsByClassName('list-item');

events();

function events() {
    window.addEventListener('keyup', keyEvent);
    window.addEventListener('keydown', keyRemoveEvent);
    btn.addEventListener('click', clickEvent);
    remove.addEventListener('click', removeList);
}

function keyEvent(e) {
    let inputValue = input.value;
    if (e.keyCode == 13) {
        if (inputValue != 0) {
            //alertElement('danger', 'Lütfen silip yeni sayı giriniz...');
            prime(inputValue);
            alertElement('succes', 'Hesaplama Başarılı');
            btn.disabled = true;
            e.preventDefault();
        } else {
            alertElement('secondary', 'Lütfen Sayı Giriniz');
        }
    }
}

function clickEvent() {
    let inputValue = input.value;
    if (inputValue != 0) {
        prime(inputValue);
        alertElement('succes', 'Hesaplama Başarılı');
        btn.disabled = true;
    } else {
        alertElement('secondary', 'Lütfen Sayı Giriniz');
    }
}

function removeList() {
    list.remove();
    let inputValue = input.value;

    let newList = document.createElement('ul');
    newList.className = 'list';
    list = newList;

    document.querySelector('.container').appendChild(list);
    input.value = '';
    btn.disabled = false;

    if (inputValue == 0) {
        alertElement('secondary', 'Lütfen Sayı Giriniz');
    } else {
        alertElement('danger', 'Silme işlemi Başarılı');
    }
}

function alertElement(alertName, text) {
    let alertElement = document.createElement('div');
    alertElement.className = `alert alert-${alertName}`;
    alertElement.innerHTML = text;

    document.querySelector('.alerts').appendChild(alertElement);

    setTimeout(function() {
        alertElement.remove();
    }, 3000);
}

function keyRemoveEvent(e) {
    if (e.keyCode == 46) {
        removeList();
    }
}