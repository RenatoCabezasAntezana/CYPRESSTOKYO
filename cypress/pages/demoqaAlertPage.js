class DemoqaAlertPage {
  elements = {
    buttonAlert: () => cy.get("#alertButton"),
    buttonAlertAfterFive: () => cy.get("#timerAlertButton"),
    buttonAlertConfirm: () => cy.get("#confirmButton"),
    textAlertConfirm: () => cy.get("#confirmResult"),
  };

  clickAlert() {
    //const stub = cy.stub();
    this.elements.buttonAlert().click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("You clicked a button");
    });
  }
  alertAfter() {
    this.elements.buttonAlertAfterFive().click().wait(5000);
    cy.on("window:alert", (textFive) => {
      expect(textFive).to.contains("This alert appeared after 5 seconds");
    });
  }
  alertConfirm() {
    this.elements.buttonAlertConfirm().click();
    cy.on("window:confirm", (str) => {
      expect(str).to.contains("Do you confirm action?");
      this.elements
        .buttonAlertConfirm()
        .invoke("text")
        .then((text) => {
          expect(text).to.contains("You selected Ok");
        });
    });
  }
}
export default new DemoqaAlertPage();
