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
      cy.spy(win, "open").as("open");
    });

    this.elements.messageWindowButton().click();
    cy.get("@open")
      .should("have.been.calledOnceWith", "", "MsgWindow")
      .its("firstCall.returnValue")
      .then((childWindow) => {
        expect(childWindow.document.body.innerText).to.include("Knowledge");
      })
      .wait(1000)
      .invoke("close");
  }

  visitPage() {
    cy.visit(this.url);
  }

  openNewTab() {}

  openNewWindow() {
    cy.window().then((win) => {
      cy.spy(win, "open").as("open");
    });

    this.elements.buttonNewWindow().click();
    cy.get("@open")
      .should("have.been.calledOnceWith")
      .its("firstCall.returnValue")
      .wait(1000)
      .then((body) => {
        // const childWindow=win.open("https://demoqa.com/sample")
        const url = body.location.href;
        cy.log(url);
        //const win = body.contents().find("body");
        cy.wrap(body)
          .wait(2000)
          //.find("#sampleHeading")
          .should("have.text", "")
          .wait(2000)
          .invoke("close");
      })
      .wait(1000);
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
