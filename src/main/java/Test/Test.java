package Test;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;

import io.godiscovery.lib.BaseTest;
import io.godiscovery.pom.DiscoveryHomePage;

public class Test extends BaseTest {

	public static void main(String[] args) {
		initialization();
		DiscoveryHomePage php = new DiscoveryHomePage(driver);
		php.scrollDownToPopularShow();
		php.lastVideoByPressingRightArrow();
		php.clickOnExploreShows();
		php.showMore();
		php.writeTitleAndDuration();

	}

}
