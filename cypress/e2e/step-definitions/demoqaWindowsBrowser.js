import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoqaWindowsPage from "../../pages/demoqaWindowsBrowserPage";

Given("The demoqa homepage test browser windows", () => {
  cy.on("uncaught:exception", () => false);
  cy.visit("https://demoqa.com/browser-windows/")
});

When("The user clicks the new tab", () => {
  //DemoqaWindowsPage.openNewTab();
});

Then("The user clicks the new window", () => {
  
})
Then("The user clicks the new window message", () => {
  DemoqaWindowsPage.openMessageWindowAndWaitForText();
});
