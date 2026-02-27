import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { PracticeFormsPage } from '../../pages/forms/PracticeFormsPage';
import { FormsPage } from '../../pages/forms/FormsPage';

test.describe('Forms page tests', () => {
  let homePage;
  let practiceFormPage;
  let formsPage;
  const filePath = 'test-data\\sampleFile.jpeg';

  test.beforeAll('Visit Homepage', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.visitHomePage();
    await homePage.navigateToFormsPage(page);
    formsPage = new FormsPage(page);
    await formsPage.navigateToPracticeFormMenu();
    practiceFormPage = new PracticeFormsPage(page);
  });


  test('Verify submiting a form with all valid informations', async ({ page }) => {
    await practiceFormPage.enterFirstName('John');
    await practiceFormPage.enterLastName('Doe');
    await practiceFormPage.enterEmail('John@doe.com');
    await practiceFormPage.selectMaleGender();
    await practiceFormPage.enterMobileNumber('1234567890');
    await practiceFormPage.enterDateOfBirth('10/05/1990');
    await practiceFormPage.enterSubjects(['Math']);
    await practiceFormPage.selectSportsHobby();
    await practiceFormPage.selectMusicHobby();
    await practiceFormPage.selectPictureToUpload(filePath);
    await practiceFormPage.enterCurrentAddress('123 Main St, Anytown, USA');
    await practiceFormPage.selectState('NCR');
    await practiceFormPage.selectCity('Delhi');
    await practiceFormPage.clickSubmitButton();
  });

   test.only('Verify first name, last name, gender and phone number are required field', async ({ page }) => {
    await practiceFormPage.enterEmail('John@doe.com');
    await practiceFormPage.selectMaleGender()
    await practiceFormPage.enterDateOfBirth('10/05/1990');
    await practiceFormPage.enterSubjects(['Math']);
    await practiceFormPage.selectSportsHobby();
    await practiceFormPage.selectMusicHobby();
    await practiceFormPage.selectPictureToUpload(filePath);
    await practiceFormPage.enterCurrentAddress('123 Main St, Anytown, USA');
    await practiceFormPage.selectState('NCR');
    await practiceFormPage.selectCity('Delhi');
    await practiceFormPage.clickSubmitButton();
    await practiceFormPage.assertFirstNameFieldIsRequired();
    await practiceFormPage.assertLastNameFieldIsRequired();
    await practiceFormPage.assertMobileNumberFieldIsRequired();
  });

});
