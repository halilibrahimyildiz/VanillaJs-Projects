const githubForm = document.getElementById('github-form');
const nameInput = document.getElementById('githubname');
const clearLastUsers = document.getElementById('clear-last-users');
const lastUsers = document.getElementById('last-users');

const github = new Github();

const ui = new UI();

eventListener();

function eventListener() {
    githubForm.addEventListener('submit', getData);
    clearLastUsers.addEventListener('click', clearAllSearched);

    document.addEventListener('DOMContentLoaded', getAllSearched);
}

function getData(e) {
    let username = nameInput.value.trim();

    if (username === '') {
        alert('Lütfen geçerli bir kullanıcı adı giriniz');
    } else {
        github
            .getGithubData(username)
            .then((response) => {
                if (response.user.message === 'Not Found') {
                    ui.showError('Lütfen Geçerli Bir isim giriniz');
                } else {
                    ui.storageToUI(username);
                    Storage.addSearchedUserToStorage(username);

                    ui.showUserInfo(response.user);
                    ui.showUserRepos(response.repo);
                }
            })
            .catch((err) => ui.showError(err));
    }

    ui.clearInput(); // Input temizleme
    e.preventDefault();
}

function clearAllSearched() {
    // Tüm arananları Temizle
    if (confirm('Emin misiniz ?')) {
        Storage.clearAllUsers();
        ui.storageToUIClear();
    }
}

function getAllSearched() {
    // Arananları storageden al ui ya ekle
    let users = Storage.getSearchedFromStorage();

    // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>

    users.forEach((user) => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        const result = document.createElement('li');
        result.className = 'list-group-item';
        result.textContent = user;
        lastUsers.appendChild(result);
    });
}