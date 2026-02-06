import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { ElementsPage } from '../../pages/elements/ElementsPage';
import { TextBoxPage } from '../../pages/elements/TextBoxPage';

test.describe('Verify functionalities of TextBox Page', () => {

    let elementPage;
    let textBoxPage;

    test.beforeAll('Visit Homepage and navigate to Elements > TextBox page', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const homePage = new HomePage(page);
        await homePage.visitHomePage();
        await homePage.navigateToElementsPage(page);
        elementPage = new ElementsPage(page);
        await elementPage.navigateToTextBoxMenu();
        textBoxPage = new TextBoxPage(page);
    });


    test('Verify submitting text box with valid data', async ({ page }) => {
        await textBoxPage.enterFullName('John Doe');
        await textBoxPage.enterEmail('john.doe@example.com');
        await textBoxPage.enterCurrentAddress('123 Main Street');
        await textBoxPage.enterPermanentAddress('456 Oak Avenue');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertOutputNameIsVisible('John Doe');
        await textBoxPage.assertOutputEmailIsVisible('john.doe@example.com');
        await textBoxPage.assertOutputCurrentAddressIsVisible('123 Main Street');
        await textBoxPage.assertOutputPermanentAddressIsVisible('456 Oak Avenue');
    });

    test('Verify Submitting full name textbox empty', async ({ page }) => {
        await textBoxPage.enterFullName('');
        await textBoxPage.enterEmail('john.doe@example.com');
        await textBoxPage.enterCurrentAddress('123 Main Street');
        await textBoxPage.enterPermanentAddress('456 Oak Avenue');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertNameFieldIsNotVisibleInOutput();
        await textBoxPage.assertOutputEmailIsVisible('john.doe@example.com');
        await textBoxPage.assertOutputCurrentAddressIsVisible('123 Main Street');
        await textBoxPage.assertOutputPermanentAddressIsVisible('456 Oak Avenue');
    });

    test('Verify Submitting Email textbox empty', async ({ page }) => {
        await textBoxPage.enterFullName('John Doe');
        await textBoxPage.enterEmail('');
        await textBoxPage.enterCurrentAddress('123 Main Street');
        await textBoxPage.enterPermanentAddress('456 Oak Avenue');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertEmailFieldIsNotVisibleInOutput();
        await textBoxPage.assertOutputNameIsVisible('John Doe');
        await textBoxPage.assertOutputCurrentAddressIsVisible('123 Main Street');
        await textBoxPage.assertOutputPermanentAddressIsVisible('456 Oak Avenue');
    });


    test('Verify submitting Current Address text box empty', async ({ page }) => {
        await textBoxPage.enterFullName('John Doe');
        await textBoxPage.enterEmail('john.doe@example.com');
        await textBoxPage.enterCurrentAddress('');
        await textBoxPage.enterPermanentAddress('456 Oak Avenue');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertOutputCurrentAddressIsNotVisibleInOutput();
        await textBoxPage.assertOutputNameIsVisible('John Doe');
        await textBoxPage.assertOutputEmailIsVisible('john.doe@example.com');
        await textBoxPage.assertOutputPermanentAddressIsVisible('456 Oak Avenue');
    });


    test('Verify submitting  Permenant Address text box empty', async ({ page }) => {
        await textBoxPage.enterFullName('John Doe');
        await textBoxPage.enterEmail('john.doe@example.com');
        await textBoxPage.enterCurrentAddress('123 Main Street');
        await textBoxPage.enterPermanentAddress('');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertOutputCurrentAddressIsNotVisibleInOutput();
        await textBoxPage.assertOutputNameIsVisible('John Doe');
        await textBoxPage.assertOutputEmailIsVisible('john.doe@example.com');
        await textBoxPage.assertOutputCurrentAddressIsVisible('123 Main Street');
        await textBoxPage.assertOutputPermanentAddressIsNotVisibleInOutput();
    });

    test('Verify submitting all the text box empty', async ({ page }) => {
        await textBoxPage.enterFullName('');
        await textBoxPage.enterEmail('');
        await textBoxPage.enterCurrentAddress('');
        await textBoxPage.enterPermanentAddress('');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertOutputBoxIsNotVisible();
    });


    test('Verify submitting email text box with invalid data', async ({ page }) => {
        await textBoxPage.enterFullName('John Doe');
        await textBoxPage.enterEmail('asdfasf');
        await textBoxPage.enterCurrentAddress('123 Main Street');
        await textBoxPage.enterPermanentAddress('456 Oak Avenue');
        await textBoxPage.clickSubmitButton();

        await textBoxPage.assertOutputBoxIsNotVisible();
    });



});
