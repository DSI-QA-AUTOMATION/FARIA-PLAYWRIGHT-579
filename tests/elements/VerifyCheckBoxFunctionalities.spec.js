import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { CheckboxPage } from '../../pages/elements/CheckboxPage';

test.describe('Verify functionalities of Checkbox Page', () => {

    let elementPage;
    let checkBoxPage;

    test.beforeEach('Visit Homepage and navigate to Elements > TextBox page', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await homePage.visitHomePage();
        await homePage.navigateToElementsPage(page);
        elementPage = new ElementsPage(page);
        await elementPage.navigateToCheckBoxMenu();
        checkBoxPage = new CheckboxPage(page);
    });


      test('Verify expanding Home folder', async ({ page }) => {
        await checkBoxPage.clickHomeToggleButton();
        await checkBoxPage.assertDesktopFolderIsVisible();
        await checkBoxPage.assertDocumentsFolderIsVisible();
        await checkBoxPage.assertDownloadsFolderIsVisible();
    });

      test('Verify expanding Home > Documents > Workspace > React', async ({ page }) => {
        await checkBoxPage.clickHomeToggleButton();
        await checkBoxPage.assertDocumentsFolderIsVisible();
        await checkBoxPage.clickDocumentToggleButton();
        await checkBoxPage.assertWorkSpaceFolderIsVisible();
        await checkBoxPage.clickWorkSpaceToggleButton();
        await checkBoxPage.assertReactFolderIsVisible();
    });

     test('Verify checking a single checkbox', async ({ page }) => {
       await checkBoxPage.checkHomeCheckBox();
       await checkBoxPage.assertHomeCheckBoxIsChecked();
    });


     test('Verify checking multiple checkboxes', async ({ page }) => {
        await checkBoxPage.clickHomeToggleButton();
        await checkBoxPage.assertDocumentsFolderIsVisible();
        await checkBoxPage.clickDocumentToggleButton();
        await checkBoxPage.assertWorkSpaceFolderIsVisible();
        await checkBoxPage.clickWorkSpaceToggleButton();
        await checkBoxPage.assertReactFolderIsVisible();
        await checkBoxPage.assertAngularFolderIsVisible();
        await checkBoxPage.assertVeuFolderIsVisible();
        await checkBoxPage.checkWorkSpaceReactCheckBox();
        await checkBoxPage.assertReactCheckboxIsChecked();  
        await checkBoxPage.assertAngularCheckboxIsChecked();
        await checkBoxPage.assertVeuCheckboxIsChecked();
    })

    test('Verify checking Home checkox checks all the checkboxes', async ({ page }) => {
        await checkBoxPage.checkHomeCheckBox();
        await checkBoxPage.assertHomeCheckBoxIsChecked();
        await checkBoxPage.clickHomeToggleButton();
        await checkBoxPage.assertDesktopFolderIsVisible();
        await checkBoxPage.assertDocumentsFolderIsVisible();
        await checkBoxPage.assertDownloadsFolderIsVisible();
        await checkBoxPage.assertDesktopCheckBoxIsChecked();
        await checkBoxPage.assertDocumentsCheckBoxIsChecked();
        await checkBoxPage.assertDownloadsCheckBoxIsChecked();
    })

     test('Verify unchecking Home checkbox unchecks all the checkboxes', async ({ page }) => {
        await checkBoxPage.checkHomeCheckBox();
        await checkBoxPage.assertHomeCheckBoxIsChecked();
        await checkBoxPage.checkHomeCheckBox();
        await checkBoxPage.assertHomeCheckBoxIsNotChecked();
        await checkBoxPage.clickHomeToggleButton();
        await checkBoxPage.assertDesktopFolderIsVisible();
        await checkBoxPage.assertDocumentsFolderIsVisible();
        await checkBoxPage.assertDownloadsFolderIsVisible();
        await checkBoxPage.assertDesktopCheckBoxIsNotChecked();
        await checkBoxPage.assertDocumentsCheckBoxIsNotChecked();
        await checkBoxPage.assertDownloadsCheckBoxIsNotChecked();
    })



});
