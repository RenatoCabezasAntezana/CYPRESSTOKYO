import "cypress-xpath";

class DemoqaFrames {
  elements = {
    frame1: () => cy.get("#frame1"),
    frame2: () => cy.get("#frame2"),
    textFrame: () => cy.get(`#sampleHeading`),
  };
  validateFrame1() {
    this.elements
      .frame1()
      .should("exist")
      .should("be.visible")
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find("#sampleHeading")
          .should("have.text", "This is a sample page");
      });
  }
  validateFrame2() {
    this.elements
      .frame2()
      .should("exist")
      .should("be.visible")
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .scrollIntoView()
      .invoke("attr", "width", "500")
      .invoke("attr", "height", "400")
      .then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find("#sampleHeading")
          .should("have.text", "This is a sample page");
      });
  }
}
export default new DemoqaFrames();
