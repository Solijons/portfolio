package appManager;

import PageObjectModel.SessionPOM;
import models.LoginCredentials;
import org.openqa.selenium.WebDriver;

public class SessionHelper extends HelperBase {
    public SessionHelper(WebDriver driver) {
        super(driver);
    }
    private SessionPOM sessionPOM = new SessionPOM();

    public void login(LoginCredentials credentials) {
        type(sessionPOM.username(), credentials.getUsername());
        type(sessionPOM.password(), credentials.getPassword());
        click(sessionPOM.signInBtn());
    }

}
