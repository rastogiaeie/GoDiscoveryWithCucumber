package io.godiscovery.lib;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class BaseTest {
	
	public static WebDriver driver;
	public static Properties prop= new Properties();
	
	public  static void loadProperty()
	{
		String path=".\\src\\main\\resources\\config\\config.properties";
		FileInputStream fis = null;
		try {
			 fis =new FileInputStream(path);
		} catch (FileNotFoundException e) {
			Assert.fail("file is not present at specified path : "+path);
		}
		try {
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	
	public static void initialization()
	{
		loadProperty();
		String browserName =  prop.getProperty("browser");
		if(browserName.equalsIgnoreCase("chrome"))
		{
			System.setProperty(prop.getProperty("chromeKey"), prop.getProperty("chromeValue"));
			driver=new ChromeDriver();
		}
		else if(browserName.equalsIgnoreCase("fireFox"))
		{
			System.setProperty(prop.getProperty("fireFoxKey"), prop.getProperty("fireFoxValue"));
			driver=new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
		String title = driver.getTitle();
		System.out.println(title);
		
	}
	

}
