import {Given,When,Then} from ("@badeball/cypress-cucumber-preprocessor");

import AmazonPage from "../../pages/amazonPage";

Given("the amazon homepage is operative", () => {
  cy.visit("/");
  AmazonPage.validatePage();
});

When("the user searches for {string}", (products) => {
  AmazonPage.searchProduct(products);
});

Then("selects {string}", (product) => {
  AmazonPage.selectProduct(product);
});

Then("navigates to page number {string}", (number) => {
  AmazonPage.browserPage(number);
});
Then("selects the third item", () => {
  AmazonPage.selectThirdItem();
});
Then("confirm message {string}", (message) => {
  AmazonPage.confirmMessage(message);
});
