import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CalendarPerurailPage from "../../pages/calendarPerurailPage";

Given("The user is located on the PeruRail web site", () => {
  cy.on("uncaught:exception", () => false);
  cy.visit("https://www.perurail.com/es/");
  CalendarPerurailPage.confirmIcon();
});

When("The user write date to go", () => {
  CalendarPerurailPage.filterDateGo();
});

Then("The user write date return", () => {
  CalendarPerurailPage.filterDateReturn();
});

When("The user is selected his origin and destination", () => {
  CalendarPerurailPage.filterOrigin();
  CalendarPerurailPage.filterDestination();
});
