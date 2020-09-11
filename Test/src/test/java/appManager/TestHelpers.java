package appManager;

import org.openqa.selenium.WebDriver;

public class TestHelpers extends HelperBase {
    public TestHelpers(WebDriver driver) {
        super(driver);
    }

    public void helloWorld() {
        for (int i = 0; i < 5; i ++) {
            System.out.println("Hello World!");
        }
    }

    public String getPageTitle() {
        return driver.getTitle();
    }
}
