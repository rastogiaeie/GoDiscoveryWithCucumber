package io.godiscovery.pom;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Point;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import io.godiscovery.lib.BaseTest;
import io.godiscovery.lib.GoDiscoveryLib;

/**
 * Ashish
 * 
 * @author user In this class all web elements are define
 *
 */
public class DiscoveryHomePage extends GoDiscoveryLib {
	public DiscoveryHomePage(WebDriver driver) {
		super(driver);
	}
	private static final Logger logger = Logger.getLogger(DiscoveryHomePage.class);

	public WebDriverWait wait = new WebDriverWait(driver, 30);
	Actions actions = new Actions(driver);
	List<String> titles = new ArrayList<String>();
	@FindBy(xpath = "//span[text()='Shows']")
	private WebElement shows;
	Boolean flag = false;

	@FindBy(xpath = "//div[@id='show-drop-desktop']/ul/li/div/a[.='See All Shows']")
	private WebElement seeAllShows;
	@FindBy(xpath = "//a[contains(@href,'apollo')]")
	private List<WebElement> apolloShows;

	@FindBy(xpath = "//div[@class='showHero__showImage']/div[@class='showHero__showBrand showHero__showLogoNoClips']/div/span/i")
	private WebElement favoritesIcon;

	@FindBy(xpath = "//img[@alt='Confessions From Space: Apollo']")
	private WebElement apolloTitle;

	@FindBy(xpath = "//li[@class='dscHeaderMain__hideMobile']")
	private WebElement menu;

	@FindBy(xpath = "//a[@href='/my-videos']")
	private WebElement myVideos;
	@FindBy(xpath = "//div[.='Confessions From Space: Apollo']")
	private WebElement favoritesShowsTitle;
	@FindBy(xpath = "//h2[.='Popular Shows']")
	private WebElement popularShows;
	@FindBy(xpath = "//div[@class='carousel__arrowWrapper popularShowsCarousel__controlsProp']/div/i[@class='icon-arrow-right']")
	private WebElement rightArrow;
	@FindBy(xpath = "//li[@class='popularShowsCarousel__dotInactive']")
	private List<WebElement> dotInactive;
	@FindBy(xpath = "//a[@href='/tv-shows/moonshiners/']/div/section[@class='show-info popularShowTile__showInfo']")
	private WebElement exploreShows;
	@FindBy(xpath = "//button[.='Show More']")
	private WebElement showMore;
	@FindBy(xpath = "//p[@class='episodeTitle']")
	private List<WebElement> episodesTitle;
	@FindBy(xpath = "//p[@class='minutes']")
	private List<WebElement> episodesDuration;

	public void clickOnShows() {
		wait.until(ExpectedConditions.elementToBeClickable(shows));
		shows.click();
	}

	public void clickOnSeeAllShows() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,500)");
		driver = (WebDriver) js;
		wait.until(ExpectedConditions.elementToBeClickable(seeAllShows));
		seeAllShows.click();
	}

	public void selectShowsContainsAppolo() {
		wait.until(ExpectedConditions.visibilityOf(apolloShows.get(0)));
		WebElement ele = apolloShows.get(0);
		Point loc = ele.getLocation();
		int x = loc.getX();
		int y = loc.getY();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(" + x + "," + y + ")");
		driver = (WebDriver) js;
		ele.click();

	}

	public void varifyFavoritesIcon() {
		wait.until(ExpectedConditions.visibilityOf(favoritesIcon));
		String iconName = favoritesIcon.getAttribute("class");
		if (iconName.equals("flipIconCore__icon icon-plus ")) {
			favoritesIcon.click();
			titles.add(apolloTitle.getAttribute("alt"));
			driver.navigate().refresh();
			wait.until(ExpectedConditions.visibilityOf(favoritesIcon));
			String attribute = favoritesIcon.getAttribute("class");
			Assert.assertEquals(attribute, "flipIconCore__icon icon-minus ");
			flag = true;
		} else if (iconName.equals("flipIconCore__icon icon-minus ")) {
			favoritesIcon.click();
			titles.add(apolloTitle.getAttribute("alt"));
			driver.navigate().refresh();
			wait.until(ExpectedConditions.visibilityOf(favoritesIcon));
			Assert.assertEquals(favoritesIcon.getAttribute("class"), "flipIconCore__icon icon-plus ");
			titles.add(apolloTitle.getAttribute("alt"));
		}
	}

	public void clickOnMenuButton() {
		wait.until(ExpectedConditions.visibilityOf(menu));
		menu.click();
	}

	public void clickOnMyVideo() {
		wait.until(ExpectedConditions.visibilityOf(myVideos));
		myVideos.click();
	}

	public void varifyFavoriteShows() {
		if (flag) {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollBy(0,500)");
			driver = (WebDriver) js;
			actions.moveToElement(favoritesShowsTitle).perform();
			List<String> expectedTitle = new ArrayList<String>();
			expectedTitle.add(favoritesShowsTitle.getText());
			Assert.assertEquals(titles.get(0).toLowerCase(), expectedTitle.get(0).toLowerCase());
		} else {
			try {
				Assert.assertFalse(favoritesShowsTitle.isDisplayed());
			} catch (AssertionError e) {
				Assert.fail("after doing unFavorate Still element is present in webpage");
			}

		}

	}

	public void scrollDownToPopularShow() {
		wait.until(ExpectedConditions.visibilityOf(popularShows));
		Point loc = popularShows.getLocation();
		int x = loc.getX();
		int y = loc.getY();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(" + x + "," + y + ")");
		driver = (WebDriver) js;

	}

	public void lastVideoByPressingRightArrow() {
		int size = dotInactive.size();
		for (int i = 0; i < size; i++) {
			wait.until(ExpectedConditions.elementToBeClickable(rightArrow));
			rightArrow.click();

		}
	}

	public void clickOnExploreShows() {
		wait.until(ExpectedConditions.elementToBeClickable(exploreShows));
		exploreShows.click();

	}

	public void showMore() {
		wait.until(ExpectedConditions.elementToBeClickable(showMore));
		boolean a = true;
		for (int i = 0; i <= 1; i++) {
			wait.until(ExpectedConditions.elementToBeClickable(showMore));
			showMore.click();

		}

	}

	public static void writeDataIntoFile(String text) {
		try {
			//file path
			File statText = new File(".\\src\\main\\resources\\statusTest.txt");
			FileOutputStream is = new FileOutputStream(statText);
			OutputStreamWriter osw = new OutputStreamWriter(is);
			Writer w = new BufferedWriter(osw);
			w.write(text);
			w.close();
		} catch (IOException e) {
			logger.info("Problem writing to the file statsTest.txt");
		}
	}

	public void writeTitleAndDuration() {
		List<String> titles = new ArrayList<String>();
		for (WebElement title : episodesTitle) {
			try {
				wait.until(ExpectedConditions.visibilityOf(title));
				String episodeTitle = title.getText();
				titles.add(episodeTitle);
				
			} catch (TimeoutException e) {
				logger.info("object is not visible   "+title.getText());
			}
			

		}
		for (WebElement title : episodesDuration) {
			try {
				wait.until(ExpectedConditions.visibilityOf(title));
				String episodeDuration = title.getText();
				titles.add(episodeDuration);
				
			} catch (TimeoutException e) {
				logger.info("object is not visible   "+title.getText());
			}
			

		}
		writeDataIntoFile(titles.toString());
	}

}
