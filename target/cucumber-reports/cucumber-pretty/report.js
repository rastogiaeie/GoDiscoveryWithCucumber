$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("godiscovery.feature");
formatter.feature({
  "line": 1,
  "name": "Go Discovery",
  "description": "",
  "id": "go-discovery",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the items are added in My favorites",
  "description": "",
  "id": "go-discovery;verify-the-items-are-added-in-my-favorites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of home page is Discovery - Official Site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on shows and selects see all shows",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select apollo shows and verify the favorites status and change the status of favorites and verify status",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on menu option",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on My videos option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify the items are added in My favorites",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.open_browser_and_enter_url()"
});
formatter.result({
  "duration": 19725314700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.title_of_home_page_is_Discovery_Official_Site()"
});
formatter.result({
  "duration": 10379100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_shows_and_selects_see_all_shows()"
});
formatter.result({
  "duration": 1263465100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.select_apollo_shows_and_verify_the_favorites_status_and_change_the_status_of_favorites_and_verify_status()"
});
formatter.result({
  "duration": 21856350500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_menu_option()"
});
formatter.result({
  "duration": 124201300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_click_on_My_videos_option()"
});
formatter.result({
  "duration": 206094400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_the_items_are_added_in_My_favorites()"
});
formatter.result({
  "duration": 5582313800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "duration": 243579100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the items are added in My favorites",
  "description": "",
  "id": "go-discovery;verify-the-items-are-added-in-my-favorites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "open browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of home page is Discovery - Official Site",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "scroll down to populer show",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Go to last Video by pressing right Arrow",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on Explore show",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click on more show",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "write title and duration of show into a file",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.open_browser_and_enter_url()"
});
formatter.result({
  "duration": 13118520300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.title_of_home_page_is_Discovery_Official_Site()"
});
formatter.result({
  "duration": 6966800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.scroll_down_to_populer_show()"
});
formatter.result({
  "duration": 134563000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.go_to_last_Video_by_pressing_right_Arrow()"
});
formatter.result({
  "duration": 2577326300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_Explore_show()"
});
formatter.result({
  "duration": 733914700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.click_on_more_show()"
});
formatter.result({
  "duration": 9489771200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.write_title_and_duration_of_show_into_a_file()"
});
formatter.result({
  "duration": 30787292100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on XP (e923a2daeb390bc8f6f2269685acb8c7)] -\u003e xpath: //p[@class\u003d\u0027episodeTitle\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-KLIGK1A\u0027, ip: \u0027192.168.43.161\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59251}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e923a2daeb390bc8f6f2269685acb8c7\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat io.godiscovery.pom.DiscoveryHomePage.writeTitleAndDuration(DiscoveryHomePage.java:209)\r\n\tat stepDefinitions.StepDefination.write_title_and_duration_of_show_into_a_file(StepDefination.java:78)\r\n\tat ✽.Then write title and duration of show into a file(godiscovery.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});