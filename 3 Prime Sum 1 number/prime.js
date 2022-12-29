function prime(number) {
    let a_prime, b_prime, c_prime;
    let i, j, k, a, b, c, t;
    let sayac = 0;
    if (number >= 10) {
        for (let a = 2; a <= number; a++) {
            a_prime = 1;
            for (let i = 2; i < a; i++) {
                if (a % i == 0) {
                    a_prime = 0;
                    break;
                }
            }
            if (a == i) {
                a_prime = 1;
            }
            if (a_prime == 1) {
                for (let b = 2; b <= number; b++) {
                    b_prime = 1;

                    for (let j = 2; j < b; j++) {
                        if (b % j == 0) {
                            b_prime = 0;
                            break;
                        }
                    }
                    if (b_prime == 1 && a != b && a < b) {
                        for (let c = 2; c <= number; c++) {
                            c_prime = 1;
                            for (let k = 2; k < c; k++) {
                                if (c % k == 0) {
                                    c_prime = 0;

                                    break;
                                }
                            }
                            if (c_prime == 1 && a != c && b != c && b < c) {
                                if (number == a + b + c) {
                                    createLiElement(`${number} = ${a} + ${b} + ${c}`);
                                    t = 1;
                                    sayac++;
                                }
                            }
                        }
                    }
                }
            }
        }
        sayici(sayac);
    } else if (number < 10 || t == 0) {
        alertElement('danger', 'Hata Lütfen silip başka bir sayıyla deneyin...');
    }
}

function sayici(sayac) {
    list.innerHTML += `<li class="list-item list-say" style="margin-bottom:10px">${sayac} Adet Cevap Bulundu</li>`;
}

function createLiElement(text) {
    setTimeout(() => {
        list.innerHTML += `<li class="list-item">${text}</li>`;
    }, 1000);
}