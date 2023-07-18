import customConfig from '../customConfig.js';

class PurchasePage {

    get productBag() {
        return $('#item_4_title_link')
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get cartItemCount() {
        return $('a*=1')
    }

    get shoppingCartBtn() {
        return $('#shopping_cart_container')
    }

    get checkoutBtn() {
        return $('#checkout')
    }

    get firstName() {
        return $('#first-name')

    }

    get lastName() {
        return $('#last-name')
    }

    get zipCode() {
        return $('#postal-code')

    }

    get continueBtn() {
        return $('#continue')
    }

    get finishBtn() {
        return $('#finish')
    }

    get thanksMessageText() {
        return $('h2*=Thank you for your order!')
    }

    get checkoutCompleteText() {
        return $('span*=Checkout: Complete!')
    }

    get backBtn() {
        return $('span*=back-to-products')
    }

    get removeBtn() {
        return $('#remove-sauce-labs-backpack')
    }

    get shoppingProductsNumber() {
        return $('span.shopping_cart_badge')
    }

    get continueShopping() {
        return $('#continue-shopping')
    }


    get productsPrice() {
        return $$('.inventory_item_price')
    }

    get btnSort() {
        return $('[data-test="product_sort_container"]')
    }

    get lowToHighSort() {
        return $('[value="lohi"]')
    }

    get highToLowSort() {
        return $('[value="hilo"]')
    }


    async selectProduct() {
        await this.productBag.waitForDisplayed()
        await this.productBag.click()

    }

    async addProductToCart() {
        await this.addToCartButton.waitForDisplayed()
        await this.addToCartButton.click()
    }

    async goToShoppingCart() {
        await this.shoppingCartBtn.click()
        await this.productBag.isDisplayed()
    }

    async removeProductFromCart() {
        await this.removeBtn.click()
        //Validate that the shopping cart does not have any number, because the product is removed
        await this.shoppingProductsNumber.waitForDisplayed({ reverse: true }); //this expects false
    }

    async continueToShopping() {
        await this.continueShopping.waitForDisplayed()
        await this.continueShopping.click()
    }


    async proceedToCheckout() {
        await this.checkoutBtn.waitForDisplayed()
        await this.checkoutBtn.click()
        await this.firstName.setValue(customConfig.firstName)
        await this.lastName.setValue(customConfig.lastName)
        await this.zipCode.setValue(customConfig.zipCode)
    }

    async continuetoPayment() {
        await this.continueBtn.isExisting()
        await this.continueBtn.click()
        await this.finishBtn.click()

    }

    async productOrderConfirmation() {
        await this.checkoutCompleteText.isDisplayedInViewport()
        await this.thanksMessageText.isExisting()
        await this.backBtn.isClickable()

    }

    async sortBasedOnSortingType(sortingType) {
        await this.btnSort.click()
        await sortingType.waitForDisplayed()
        await sortingType.click()
    }

    async validatePriceSorting(sortingType) {

        const firstPriceProduct = await this.productsPrice[0].getText()  //Store the price of first product in this variable
        //Than  we change the sort
        await this.sortBasedOnSortingType(sortingType)
        //now we get the last element after the second sort 
        const lastPriceProduct = await this.productsPrice[await this.productsPrice.length - 1];
        const lastPriceProductValue = await lastPriceProduct.getText();

        //expect first element to be equal as the last element because we changed the sort
        await expect(firstPriceProduct).toEqual(lastPriceProductValue)
    }



}



export default new PurchasePage();