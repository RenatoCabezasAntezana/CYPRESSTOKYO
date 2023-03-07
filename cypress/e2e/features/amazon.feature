Feature: Feature name

Scenario: Amazon web page
    Given the amazon homepage is operative
    When the user searches for "alexa"
    And selects "alexa echo{enter}"
    And navigates to page number "4"
    And selects the third item

    