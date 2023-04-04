import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DemoqaFramesPage from "../../pages/demoqaFramesPage";

Given("I am on page the frames", () => {
  cy.on("uncaught:exception", () => false);
  cy.visit("https://demoqa.com/frames/");
});

When("I interact with the frame1",()=>{
    DemoqaFramesPage.validateFrame1()
})
Then("I interact with the frame2",()=>{
    DemoqaFramesPage.validateFrame2()
})
