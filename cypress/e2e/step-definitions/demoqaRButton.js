import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import DemoqaRButton from "../../pages/demoqaRButtonPage"

Given("The homepage radio button demoqa is operative",()=>{
    cy.on('uncaught:exception', () => false)
    cy.visit("https://demoqa.com/radio-button/")
})

When("The user validates the existence of the buttons",()=>{
    cy.log("Pagina de radio button")
    DemoqaRButton.validateButton()
    DemoqaRButton.clickYes()
    
})