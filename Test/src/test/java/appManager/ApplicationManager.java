package appManager;

import models.LoginCredentials;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.fail;

public class ApplicationManager {
    private WebDriver driver;
    private StringBuffer verificationErrors = new StringBuffer();
    private NavigationHelper navigationHelper;
    private SessionHelper sessionHelper;
    private TestHelpers testHelpers;
    private String browser;
    private Properties properties;

    public ApplicationManager(String browser) {
        this.browser = browser;
        properties = new Properties();
    }

    public void init() throws IOException {
        String target = System.getProperty("target", "local");
        properties.load(new FileReader(new File(String.format("src/main/resources/%s.properties", target))));

        switch (browser) {
            case BrowserType.CHROME:
                System.setProperty("webdriver.chrome.driver", "chromedriver");
                driver = new ChromeDriver();
                break;
            case BrowserType.FIREFOX:
                driver = new FirefoxDriver();
                break;
            case BrowserType.IE:
                driver = new InternetExplorerDriver();
                break;
        }

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        navigationHelper = new NavigationHelper(driver, properties.getProperty("web.baseUrl"));
        testHelpers = new TestHelpers(driver);

         if (! properties.getProperty("web.baseUrl").toLowerCase().contains("localhost")) {
             sessionHelper = new SessionHelper(driver);
             sessionHelper.login(new LoginCredentials()
                     .withUsername(properties.getProperty("web.username"))
                     .withPassword(properties.getProperty("web.password")));
         }
    }

    public void stop() {
        driver.quit();
        String verificationErrorString = verificationErrors.toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }


    public NavigationHelper goTo() {
        return navigationHelper;
    }

    public TestHelpers testHelpers() {
        return testHelpers;
    }



}