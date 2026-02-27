import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage/HomePage';
import { AlertsFramesWindowsPage } from '../../pages/alertsFramesWidgets/AlertsFrameWidgetsPage';
import { AlertsPage } from '../../pages/alertsFramesWidgets/AlertsPage';


test.describe('HomePage tests', () => {
  let homePage;
  let alertsPage;
  let alertsFramesWidgetsPage;
  let inputText = 'Test Input';
  
  test.beforeEach('Visit Homepage', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.visitHomePage();
    await homePage.navigateToAlertsFramesWidgetsPage();
    alertsFramesWidgetsPage = new AlertsFramesWindowsPage(page);
    alertsFramesWidgetsPage.navigateToAlertsMenu();
    alertsPage = new AlertsPage(page);
  });


  test('Verify clicking button to see an alert', async ({ page }) => {
   let alertMessage = await alertsPage.clickAlertButton();
   await alertsPage.assertAlertTextIsVisible(alertMessage);
  });

   test('Verify clicking on button an alert appears after 5 seconds', async ({ page }) => {
   let alertMessage = await alertsPage.clickTimerAlertButton(true);
   await alertsPage.assertTimerAlertTextIsVisible(alertMessage);
  });

  test('Verify clicking on button to see a confirm box', async ({ page }) => {  
    await alertsPage.clickConfirmButton();
    await alertsPage.assertConfirmResultTextIsVisible('You selected Ok');
  });

  test('Verify clicking on button to see a prompt box', async ({ page }) => {  
    await alertsPage.clickPromtButton(inputText);
    await alertsPage.assertPromptResultTextIsVisible(`You entered ${inputText}`);
  });



});
