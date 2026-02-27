import { expect } from '@playwright/test';
import { Utils } from '../../utils/Utils';
let alertMessage = '';
const utils = new Utils();
export class AlertsPage {
    constructor(page) {
        this.page = page;
        this.alertsButton = page.locator("button[id='alertButton']");
        this.timerAlertButton = page.locator("button[id='timerAlertButton']");
        this.confirmButton = page.locator("button[id='confirmButton']");
        this.promtButton = page.locator("button[id='promtButton']");
        this.confirmResultText = page.locator('span[id="confirmResult"]');
        this.dialogPromise = null;
        this.modal = page.locator('div[class="modal-content"]');
        this.dialog = null;
        this.sucessMessage = page.locator('span[id="confirmResult"]');
        this.promptMessage = page.locator('span[id="promptResult"]');
    }

    async clickAlertButton() {
        this.page.once('dialog', async (dialog) => {
            alertMessage = dialog.message();
            await dialog.accept();
        });
        await this.alertsButton.click();
        return alertMessage;
    }

    async clickTimerAlertButton() {
        this.page.once('dialog', async (dialog) => {
            alertMessage = dialog.message();
            await dialog.accept();
        });
        await this.timerAlertButton.click();
        await utils.waitForTimeOut(6000);
        return alertMessage;
    }

    async clickConfirmButton(accept = true) {
        this.page.once('dialog', async dialog => {
            if (accept) {
                await dialog.accept();
            } else {
                await dialog.dismiss();
            }
        });

        await this.confirmButton.click();
        await utils.waitForTimeOut(5000);
    }

    async clickPromtButton(inputText = '') {
         this.page.once('dialog', async dialog => {
            if (inputText) {
                await dialog.accept(inputText);
            } else {
                await dialog.dismiss();
            }
        
        });
        await this.promtButton.click();
        await utils.waitForTimeOut(5000);
    }

    async getAlertText() {
        return await this.page.evaluate(() => window.alertText);
    }

    async getConfirmResultText() {
        return await this.confirmResultText.textContent();
    }

    async assertAlertTextIsVisible(expectedText) {
        expect(expectedText).toBeTruthy();
        expect(expectedText.length).toBeGreaterThan(0);
    }

    async assertTimerAlertTextIsVisible(expectedText) {
        expect(expectedText).toBeTruthy();
        expect(expectedText.length).toBeGreaterThan(0);
    }

    async assertConfirmResultTextIsVisible(expectedText) {
        expect(this.confirmResultText).toContainText(expectedText);
        expect(this.confirmResultText).toBeVisible();
        
    }

    async assertPromptResultTextIsVisible(expectedText) {
        expect(this.promptMessage).toContainText(expectedText);
        expect(this.promptMessage).toBeVisible();
    }


}