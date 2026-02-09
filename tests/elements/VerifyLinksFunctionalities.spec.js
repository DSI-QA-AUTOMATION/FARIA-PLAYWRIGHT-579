import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { LinksPage } from '../../pages/elements/LinksPage';
test.describe('Verify Links Functionalities', () => {
  let homePage;
  let elementPage;
  let linksPage;

  test.beforeAll('Visit Homepage', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.visitHomePage();
    await homePage.navigateToElementsPage(page);
    elementPage = new ElementsPage(page);
    await elementPage.navigateToLinksMenu();
    linksPage = new LinksPage(page);
  });


  test('Verify links opening a new tab', async ({ page }) => {
    await linksPage.clickHomeLink();
    await linksPage.assertClickingHomeLinkOpensNewTabWithCorrectURL(homePage.returnNewHomePageUrl());
  });


});
