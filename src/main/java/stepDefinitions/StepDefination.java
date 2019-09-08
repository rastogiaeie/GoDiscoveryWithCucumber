package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.godiscovery.lib.BaseTest;
import io.godiscovery.lib.GoDiscoveryLib;
import io.godiscovery.pom.DiscoveryHomePage;

public class StepDefination extends BaseTest{
	public static DiscoveryHomePage dhp;
	@Given("^open browser and enter url$")
	public void open_browser_and_enter_url() {
		BaseTest.initialization();
		dhp=new DiscoveryHomePage(driver);
	}

	@When("^title of home page is Discovery - Official Site$")
	public void title_of_home_page_is_Discovery_Official_Site()  {
		Assert.assertEquals(driver.getTitle(), "Discovery - Official Site");
	}

	@Then("^User clicks on shows and selects see all shows$")
	public void user_clicks_on_shows_and_selects_see_all_shows(){
		dhp.clickOnShows();
		dhp.clickOnSeeAllShows();
	   
	}

	@Then("^select apollo shows and verify the favorites status and change the status of favorites and verify status$")
	public void select_apollo_shows_and_verify_the_favorites_status_and_change_the_status_of_favorites_and_verify_status()  {
	   dhp.selectShowsContainsAppolo();
	   dhp.varifyFavoritesIcon();
	}

	@Then("^User clicks on menu option$")
	public void user_clicks_on_menu_option()  {
		dhp.clickOnMenuButton();
	  
	}

	@Then("^User click on My videos option$")
	public void user_click_on_My_videos_option() {
		dhp.clickOnMyVideo();
	   
	}

	@Then("^Verify the items are added in My favorites$")
	public void verify_the_items_are_added_in_My_favorites()  {
		dhp.varifyFavoriteShows();
	    
	}
	@Then("^scroll down to populer show$")
	public void scroll_down_to_populer_show()  {
		dhp.scrollDownToPopularShow();
	}

	@Then("^Go to last Video by pressing right Arrow$")
	public void go_to_last_Video_by_pressing_right_Arrow()  {
		dhp.lastVideoByPressingRightArrow();
	}

	@Then("^Click on Explore show$")
	public void click_on_Explore_show() {
		dhp.clickOnExploreShows();
	}

	@Then("^Click on more show$")
	public void click_on_more_show() {
		dhp.showMore();
	}

	@Then("^write title and duration of show into a file$")
	public void write_title_and_duration_of_show_into_a_file() {
		dhp.writeTitleAndDuration();
	   
	}
	@Then("^close browser$")
	public void close_browser() {
	    driver.close();
	}


}
