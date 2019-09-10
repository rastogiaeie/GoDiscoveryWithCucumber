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
  "duration": 132182444300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-KLIGK1A\u0027, ip: \u0027192.168.43.161\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54141}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5b0dca8139a2804d701608f711efefb5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:277)\r\n\tat io.godiscovery.lib.BaseTest.initialization(BaseTest.java:67)\r\n\tat stepDefinitions.StepDefination.open_browser_and_enter_url(StepDefination.java:21)\r\n\tat ✽.Given open browser and enter url(godiscovery.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.title_of_home_page_is_Discovery_Official_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_shows_and_selects_see_all_shows()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.select_apollo_shows_and_verify_the_favorites_status_and_change_the_status_of_favorites_and_verify_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_menu_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.user_click_on_My_videos_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.verify_the_items_are_added_in_My_favorites()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 42761176500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-KLIGK1A\u0027, ip: \u0027192.168.43.161\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54232}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 82351d8e493563008064f22304d03e24\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:277)\r\n\tat io.godiscovery.lib.BaseTest.initialization(BaseTest.java:67)\r\n\tat stepDefinitions.StepDefination.open_browser_and_enter_url(StepDefination.java:21)\r\n\tat ✽.Given open browser and enter url(godiscovery.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefination.title_of_home_page_is_Discovery_Official_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.scroll_down_to_populer_show()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.go_to_last_Video_by_pressing_right_Arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.click_on_Explore_show()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.click_on_more_show()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.write_title_and_duration_of_show_into_a_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefination.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});