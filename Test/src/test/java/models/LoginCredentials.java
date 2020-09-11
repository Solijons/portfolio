package models;

public class LoginCredentials {
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }

    public LoginCredentials withUsername(String username) {
        this.username = username;
        return this;
    }

    public LoginCredentials withPassword(String password) {
        this.password = password;
        return this;
    }

    private String username;
    private String password;

}
