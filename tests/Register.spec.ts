import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/Register';
import { getTestData } from '../utils/TestData';

test('Register and Login', async ({ page }) => {

await page.goto(process.env.BASE_URL!);

const registerPage = new RegisterPage(page);
const testData = getTestData();
await registerPage.register(testData.username, testData.email, testData.password);

await page.getByRole('textbox', { name: 'Enter your username' }).fill(testData.username);
await page.getByRole('textbox', { name: 'Enter your password' }).fill(testData.password);
await page.getByRole('button', { name: 'Login' }).click();
})