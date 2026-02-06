
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { RadioButtonPage } from '../../pages/elements/RadioButtonPage';
import { test} from '@playwright/test';
test.describe('Verify Radio Button Functionalities', () => {
  let elementPage;
  let radioButtonPage;
  test.beforeAll('Visit Homepage', async ({ browser }) => {
    const context = await browser.newContext();
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await homePage.visitHomePage();
        await homePage.navigateToElementsPage(page);
        elementPage = new ElementsPage(page);
        await elementPage.navigateToRadioButtonMenu();
        radioButtonPage = new RadioButtonPage(page);
  });


  test('Verify selecting a radio button ', async ({ page }) => {
    await radioButtonPage.clickYesRadioButton();
    await radioButtonPage.assertYesRadioButtonIsSelected();
    await radioButtonPage.clickImpressiveRadioButton();
    await radioButtonPage.assertImpressiveRadioButtonIsSelected();
  });

    test('Verify you can not select the No checkbox', async ({ page }) => {
    await radioButtonPage.assertCannotSelectNoRadioButton();
  });


});
