import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';


test.describe('HomePage tests', () => {
  let homePage;

  test.beforeAll('Visit Homepage', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.visitHomePage();
  });


  test('Verify all main categories are visible', async ({ page }) => {
    await homePage.assertElemetsCardIsVisible()
    await homePage.assertFormsCardIsVisible()
    await homePage.assertAlertsCardIsVisible()
    await homePage.assertWidgetsCardIsVisible()
    await homePage.assertInteractionsCardIsVisible()
    await homePage.assertBooksCardIsVisible()
  });


});
