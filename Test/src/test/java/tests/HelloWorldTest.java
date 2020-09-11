package tests;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class HelloWorldTest extends TestBase{
    @BeforeMethod
    public void ensurePrecondition() {
        // write precondition
    }

    @Test
    public void helloWorldTest() {
        app.goTo().homePage();
        app.testHelpers().helloWorld();
        app.testHelpers().getPageTitle();
    }
}
