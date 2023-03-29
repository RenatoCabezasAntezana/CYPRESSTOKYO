class DemoqaWindowsPage {
  elements = {
    buttonNewTab: () => cy.get("#tabButton"),
    buttonNewWindow: () => cy.get("#windowButton"),
    buttonNewWindowMessage: () => cy.get("#messageWindowButton"),
    //url: () => cy.get("https://demoqa.com/browser-windows/"),
    messageWindowButton: () => cy.get("#messageWindowButton"),
  };

  openMessageWindowAndWaitForText(text) {
    cy.window().then((win) => {
      cy.spy(win, 'open').as('open');
    });

    this.elements.messageWindowButton().click()
    cy.get('@open')
      .should('have.been.calledOnceWith', '', 'MsgWindow')
      .its('firstCall.returnValue')
      .then((childWindow) => {
        expect(childWindow.document.body.innerText).to.include("Knowledge");
      })
      .wait(1000)
      .invoke('close');
  }

  visitPage() {
    cy.visit(this.url);
  }


  openNewTab() {
    //this.elements.buttonNewTab().click();
    // Esperar a que se abra la nueva pestaña
    // cy.window().its("length").should("be.gt", 1);
    // Cambiar a la nueva pestaña
    // cy.window().then((win) => {
    // Verificar que el contenido de la nueva pestaña contiene el texto "Hola mundo"
    // cy.document().should("contain", "This is a sample page");
    //});
  }

  openNewWindow() {
    // Realizar acciones en la nueva ventana
    //this.elements.buttonNewWindow().click();
    // cy.get('@windowOpen').should('have.been.calledWith','','This is a sample page')
  }

  /* openNewWindowMessage() {
    cy.visit("https://demoqa.com/browser-windows/").then((win) => {
      cy.stub(win, 'opener').retunrs({}).as('open');
      this.elements.buttonNewWindowMessage().click();
      cy.get('@open').should('have.been.calledWith','','MsgWindow')
    });
  }*/
}

export default new DemoqaWindowsPage();
