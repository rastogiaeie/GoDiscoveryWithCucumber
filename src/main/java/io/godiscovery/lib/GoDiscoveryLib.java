package io.godiscovery.lib;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class GoDiscoveryLib {
	
	public  WebDriver driver;
	public GoDiscoveryLib(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver,this);
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	}

}
