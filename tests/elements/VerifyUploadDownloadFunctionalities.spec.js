import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { UploadDownloadPage } from '../../pages/elements/UploadDownloadPage';
import { test, expect } from '@playwright/test';
test.describe('Verify Upload Download Functionalities', () => {
    let elementPage;
    let uploadDownloadPage;
    test.beforeAll('Visit Upload Download Page', async ({browser}) => {
        const context = await browser.newContext({
            acceptDownloads: true,
            downloadsPath: './downloads'
        });
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await homePage.visitHomePage();
        await homePage.navigateToElementsPage(page);
        elementPage = new ElementsPage(page);
        await elementPage.navigateToUploadDownloadMenu();
        uploadDownloadPage = new UploadDownloadPage(page);


    });


    test('Verify Downloading a file ', async () => {
       await uploadDownloadPage.clickDownloadButtonAndAssertFileIsDownloaded('sampleFile.jpeg');
    });


});
