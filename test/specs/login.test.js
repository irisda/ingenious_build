import LoginPage from '../pageobjects/login.page.js'
import customConfig from '../customConfig.js';


describe('Log in Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(customConfig.baseUrl)
        await LoginPage.login(customConfig.userEmail, customConfig.userPassword)
        await expect(browser).toHaveUrlContaining('/inventory.html')
    })

    it('should logout from Sauce Demo', async () => {
        await LoginPage.logoutFromSauceDemo()
        await expect(browser).toHaveUrlContaining('demo')
    })




})

