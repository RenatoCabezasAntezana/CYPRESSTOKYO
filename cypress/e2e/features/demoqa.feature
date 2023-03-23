@Demoqa
Feature: Test Demoqa search functionality

    @HappyPath
    Scenario: Demoqa web page
        Given The demoqa homepage is operative
        When User clicks on the alert button
        And The user clicks the second alert button
        And The user clicks the third alert
        Then The user write "Renato" the fourth alert


        
    