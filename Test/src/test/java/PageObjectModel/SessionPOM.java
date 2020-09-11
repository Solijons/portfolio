package PageObjectModel;

import org.openqa.selenium.By;

public class SessionPOM {
    By username = By.id("username");
    By password = By.id("password");
    By signInBtn = By.xpath("//button[@type='submit']");

    public By username() { return username; }
    public By password() { return password; }
    public By signInBtn() { return signInBtn; }
}
