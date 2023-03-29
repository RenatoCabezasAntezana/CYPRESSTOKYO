import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import DemoqaFormPage from "../../pages/demoqaFormPage";

Given("The form demoqa homepage is operative", () => {
  cy.on("uncaught:exception", () => false);
  cy.visit("https://demoqa.com/automation-practice-form/");
});

When(
  "The user enters his personal data {string}, {string}, {string}, {string}, {string}",
  (firstName, lastName, email, address, number) => {
    DemoqaFormPage.inputPersonalInformation(
      firstName,
      lastName,
      email,
      address,
      number
    );
  }
);
Then("The user chooses his genre {string}", (gender) => {
  DemoqaFormPage.checkGender(gender);
});
Then("The user chooses his hobbies {string}", (hobbies) => {
  DemoqaFormPage.checkHobbies(hobbies);
});

Then("The user selects his pictures {string}", (picture) => {
  DemoqaFormPage.attachFile(picture);
});

Then(
  "The user autocomplete subjetct {string} {string}",
  (subject1, subject2) => {
    DemoqaFormPage.writeSubject(subject1, subject2);
  }
);

Then("The user select his state {string} and city {string}", (state, city) => {
  DemoqaFormPage.selectStateAndCity(state, city);
});

Then("The user completes all the fields",()=>{
  DemoqaFormPage.clickSubmit();
})