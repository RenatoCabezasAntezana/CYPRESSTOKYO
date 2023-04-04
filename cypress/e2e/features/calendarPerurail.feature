Feature: Tests to the calendar of the Perurail website

    The calendar section of the PeruRail website will be tested.
    Scenario: The user chooses dates
        Given The user is located on the PeruRail web site
        When The user write date to go
        And The user write date return

    Scenario: The user chooses dates, origin and destination
        Given The user is located on the PeruRail web site
        When The user is selected his origin and destination
        #And The user select date to go
         
