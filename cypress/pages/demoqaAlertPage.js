class DemoqaAlertPage {
  elements = {
    buttonAlert: () => cy.get("#alertButton"),
    buttonAlertAfterFive: () => cy.get("#timerAlertButton"),
    buttonAlertConfirm: () => cy.get("#confirmButton"),
    textAlertConfirm: () => cy.get("#confirmResult"),
    writeAlert: () => cy.get("#promtButton"),
    resultAlert: () => cy.get("#promptResult"),
  };

  clickAlert() {
    this.elements.buttonAlert().click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("You clicked a button");
    })
  }

  alertAfter() {
    this.elements.buttonAlertAfterFive().click();
    cy.on("window:alert", (textFive) => {
      expect(textFive).to.contains("This alert appeared after 5 seconds");
    });
  }

  alertConfirm() {
    this.elements.buttonAlertConfirm().click();
    cy.on("window:confirm", (str) => {
      expect(str).to.contains("Do you confirm action?");
      this.elements
        .textAlertConfirm()
        .invoke("text")
        .then((text) => {
          expect(text).to.contains("You selected Ok");
        });
    });
  }

  fourthAlert(name) {
    cy.window().then((p) => {
      cy.stub(p, "prompt").returns(name);
      this.elements.writeAlert().click();
      this.elements
        .resultAlert()
        .invoke("text")
        .then((text) => {
          expect(text).to.contains("You entered Renato");
        });
    });
  }
}
export default new DemoqaAlertPage();
