/**
 * sub page containing specific selectors and methods for a specific page
 */
class  LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get btnThreeDots () {
        return $('#react-burger-menu-btn')
    }

    get btnLogout() {
        return $('#logout_sidebar_link')
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForDisplayed()
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed()
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logoutFromSauceDemo() {
        await this.btnThreeDots.waitForDisplayed()
        await this.btnThreeDots.click()
        await this.btnLogout.click()
    }
    /**
     * a method to open the wanted url
     * @path is url variabel
     */
     open(path) {
        return browser.url(`${path}`)
    }
}

export default new LoginPage();
