import { test } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { WebTablesPage } from '../../pages/elements/WebTablesPage';

test.describe('HomePage tests', () => {
    let elementPage;
    let webTablePage;

    test.beforeAll('Visit Homepage', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await homePage.visitHomePage();
        await homePage.navigateToElementsPage(page);
        elementPage = new ElementsPage(page);
        await elementPage.navigateToWebTablesMenu();
        webTablePage = new WebTablesPage(page);
    });


    test('Verify adding a new record to web table', async ({ page }) => {
        await webTablePage.clickAddButton();
        await webTablePage.enterFirstName("John");
        await webTablePage.enterLastName("Doe");
        await webTablePage.enterEmail("john.doe@example.com");
        await webTablePage.enterAge("30");
        await webTablePage.enterSalary("50000");
        await webTablePage.enterDepartment("Engineering");
        await webTablePage.clickSubmitButton();

    });

     test('Verify the newly added  record is shown on the table', async ({ page }) => {
       await webTablePage.assertThatValueIsInTable("John"); 
       await webTablePage.assertThatValueIsInTable("Doe");
       await webTablePage.assertThatValueIsInTable("john.doe@example.com");
       await webTablePage.assertThatValueIsInTable("30");
       await webTablePage.assertThatValueIsInTable("50000");
       await webTablePage.assertThatValueIsInTable("Engineering");
    });


});
