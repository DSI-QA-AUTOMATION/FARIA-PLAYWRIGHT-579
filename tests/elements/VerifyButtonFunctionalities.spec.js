import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { ButtonsPage } from '../../pages/elements/ButtonsPage';


test.describe('Verify Button Page Functionalities', () => {
  let elementPage;
  let buttonPage;

  test.beforeAll('Visit Homepage', async ({ browser }) => {
     const context = await browser.newContext();
            const page = await context.newPage();
            const homePage = new HomePage(page);
            await homePage.visitHomePage();
            await homePage.navigateToElementsPage(page);
            elementPage = new ElementsPage(page);
            await elementPage.navigateToButtonsMenu();
            buttonPage = new ButtonsPage(page);
  });


  test('Verify Double click action', async ({ page }) => {
     await buttonPage.clickDoubleClickButton();
     await buttonPage.assertDoubleClickMessageIsVisible();
  });

  test('Verify Right click action', async ({ page }) => {
     await buttonPage.clickRightClickButton();
     await buttonPage.assertRightClickMessageIsVisible();
  });

  test('Verify Click Me button action', async ({ page }) => {
     await buttonPage.clickClickMeButton();
     await buttonPage.assertDynamicClickMessageIsVisible();
  });


});
