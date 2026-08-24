export class Login {
  constructor(page) {
    this.page = page;

    // Login
    this.USER_NAME = page.locator('[data-test="username"]');
    this.PASSWORD = page.locator('[data-test="password"]');
    this.LOGIN_BUTTON = page.locator('[data-test="login-button"]');

    // Header / Menu
    this.HAM_BURGER = page.locator('[data-test="open-menu"]');
    this.HAM_BURGER_LOGOUT = page.locator('[data-test="logout-sidebar-link"]');

    // Error
    this.ERROR_MESSAGE = page.locator('[data-test="error"]');
  }

  async login(username, password) {
    await this.USER_NAME.fill(username);
    await this.PASSWORD.fill(password);
    await this.LOGIN_BUTTON.click();
  }

  async logout() {
    await this.HAM_BURGER.click();
    await this.HAM_BURGER_LOGOUT.click();
  }
}
