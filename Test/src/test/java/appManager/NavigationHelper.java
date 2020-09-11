package appManager;

import org.openqa.selenium.WebDriver;

public class NavigationHelper extends HelperBase {
    private String baseUrl;

    public NavigationHelper(WebDriver driver, String baseUrl) {
        super(driver);
        this.baseUrl = baseUrl;
    }

    public void homePage() {
        driver.get(baseUrl);
    }
}
