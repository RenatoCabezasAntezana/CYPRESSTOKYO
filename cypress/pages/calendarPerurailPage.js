class CalendarPeruRailPage {
  elements = {
    imagePerurail: () => cy.get("img[alt='PeruRaillogo']"),
    dateGo: () => cy.get("#Filtros_Ida_Fecha"),
    dateReturn: () => cy.get("#Filtros_Retorno_Fecha"),
    origin: () => cy.get("#Filtros_Ida_Origen"),
    destination: () => cy.get("#Filtros_Ida_Destino"),
    dateOrigin: () => cy.get("#Filtros_Ida_Fecha"),
    monthOrigin: () => cy.get(".ui-datepicker-month"),
  };

  confirmIcon() {
    this.elements.imagePerurail().should("exist");
  }
  filterDateGo() {
    this.elements.dateGo().invoke("removeAttr", "readonly").clear();
    this.elements.dateGo().type("12/12/2022");
  }
  filterDateReturn() {
    this.elements.dateReturn().invoke("removeAttr", "readonly").clear();
    this.elements.dateReturn().type("15/12/2022");
  }

  filterOrigin() {
    this.elements.origin().select("Ciudad de Cusco");
  }
  filterDestination() {
    this.elements.destination().select("Arequipa").wait(1000);
    this.elements.dateOrigin().click();

    this.filtrarMes();
  }
  filtrarMes2() {
    if (cy.get(".ui-datepicker-month").should("not.have.text", "Noviembre")) {
      cy.get(".ui-datepicker-next > .ui-icon").click();
    }
  }
  filtrarMes() {
    while (
      cy.get(".ui-datepicker-month").should("not.have.text", "Noviembre")
    ) {
      cy.get(".ui-datepicker-next > .ui-icon").click();
      break;
    }
  }
}

export default new CalendarPeruRailPage();
