import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoqaAlertPage from "../../pages/demoqaAlertPage";

Given("The demoqa homepage is operative", () => {
  cy.visit("https://demoqa.com/alerts/");
  cy.on("uncaught:exception", () => false);
});

When("User clicks on the alert button",() => {
    DemoqaAlertPage.clickAlert();
})

Then("The user clicks the second alert button",()=>{
    DemoqaAlertPage.alertAfter()
})

Then("The user clicks the third alert",()=>{
    DemoqaAlertPage.alertConfirm();
})