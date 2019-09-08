Feature: Go Discovery

Scenario: Verify the items are added in My favorites

Given open browser and enter url
When  title of home page is Discovery - Official Site
Then User clicks on shows and selects see all shows
Then select apollo shows and verify the favorites status and change the status of favorites and verify status
Then User clicks on menu option
Then User click on My videos option
Then Verify the items are added in My favorites
Then close browser

Scenario: Verify the items are added in My favorites

Given open browser and enter url
When  title of home page is Discovery - Official Site
Then scroll down to populer show
Then Go to last Video by pressing right Arrow
Then Click on Explore show
Then Click on more show
Then write title and duration of show into a file
Then close browser