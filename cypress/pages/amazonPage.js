import { copyFileSync } from "fs";

class AmazonPage{
    elements = {
        logoAmazon: () =>  cy.get('#nav-logo-sprites'),
        searchAmazon: () => cy.get('#twotabsearchtextbox'),
        buttonSearch: () => cy.get('#nav-search-submit-button'),
        selectProduct: () => cy.get('#nav-flyout-searchAjax'),
        numberPage: () => cy.get('.s-pagination-strip'),
        item: () => cy.get('[data-asin="B085K45C3S"] > :nth-child(1)')
    }
    //[data-index="28"] > .s-widget-container > .a-section
    validarPagina(){
        this.elements.logoAmazon().should('be.visible');
    }
    searchProduct(products){
        this.elements.searchAmazon().click();
        this.elements.searchAmazon().type(products)
    }

    selectProduct(product){
        this.elements.selectProduct().should('contain', product)
        //this.elements.selectProduct().contains(product).click().end()
    }
    browserPage(number){
     /*   this.elements.numberPage().click();
        this.elements.numberPage().intercept();
        this.elements.logoAmazon().should('be.visible')
    */  this.elements.numberPage().should('contain',number)
        this.elements.numberPage().contains(number).click().scrollIntoView().should('be.visible')   
    }

    selectThirdItem(){
        this.elements.item().click();
    }
}

export default new AmazonPage()