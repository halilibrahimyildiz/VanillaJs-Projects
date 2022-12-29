class Storage {
    static getSearchedFromStorage() {
        // Tüm kullanıcıları al

        let users;
        if (localStorage.getItem('searched') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('searched'));
        }
        return users;
    }
    static addSearchedUserToStorage(username) {
        // Kullanıcı ekle

        let users = this.getSearchedFromStorage();

        //IndexOf
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem('searched', JSON.stringify(users));
    }
    static clearAllUsers() {
        // tüm kullanıcıları temizle
        localStorage.removeItem('searched');
    }
}