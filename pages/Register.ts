import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly createAccountButton: Locator;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.usernameInput = page.getByRole('textbox', { name: 'Choose a username' });
    this.emailInput = page.getByRole('textbox', { name: 'your@email.com' });
    this.passwordInput = page.getByRole('textbox', { name: 'Choose a password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });

    page.on('dialog', async (dialog) => {
      await expect(dialog.message()).toContain('Registration successful! Please log in.');
      await dialog.accept();
    });
  }

  async register(username: string, email: string, password: string) {
    await this.createAccountButton.click();
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
  }}