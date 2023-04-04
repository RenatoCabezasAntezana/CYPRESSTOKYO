class DemoqaRButton {
    elements = {
        radioButtons: () => cy.get(".custom-control-label"),
        informationButton: () => cy.get(".mt-3"),
        colorInformation: () => cy.get(".text-success")
    };

    validateButton(){
        this.elements.radioButtons().should('have.length',3)
        this.elements.radioButtons().eq(2).should('have.class','disabled')
    }
    clickYes(){
        this.elements.radioButtons().eq(0).click()
        this.elements.informationButton().contains("Yes")
        this.elements.informationButton().should("have.text","You have selected Yes")
        this.elements.informationButton().should("not.have.text","You have ted Yes")
        this.elements.informationButton().should("have.css","color","rgb(33, 37, 41)")
    }
}
export default new DemoqaRButton