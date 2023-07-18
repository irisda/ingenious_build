import LoginPage from '../pageobjects/login.page.js'
import PurchasePage from '../pageobjects/purchaseFlow.page.js'
import customConfig from '../customConfig.js';


describe('Validating the sort methods', () => {
    beforeEach(async () => {
        await LoginPage.open(customConfig.baseUrl)
        await LoginPage.login(customConfig.userEmail, customConfig.userPassword)
        await expect(browser).toHaveUrlContaining('/inventory.html')
    });

    /** This test cover those steps
     * Log in as a `standard user`
     *  Sort products by price
     * Validate that the sorting is right
    **/

    it('Validate user is able to sort product by price', async () => {
        await PurchasePage.sortBasedOnSortingType(PurchasePage.highToLowSort)
        await PurchasePage.validateSorting(PurchasePage.lowToHighSort)
    })

})