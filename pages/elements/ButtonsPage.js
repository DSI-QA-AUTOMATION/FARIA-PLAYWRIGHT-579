import { expect } from '@playwright/test';
export class ButtonsPage {
    constructor(page) {
        this.page = page;
        this.doubleClickButton = page.locator('button[id="doubleClickBtn"]');
        this.rightClickButton = page.locator('button[id="rightClickBtn"]');
        this.clickMeButton = page.getByRole('button', { name: 'Click Me', exact: true });
        this.doubleClickMessage = page.locator('p[id="doubleClickMessage"]');
        this.rightClickMessage = page.locator('p[id="rightClickMessage"]');
        this.dynamicClickMessage = page.locator('p[id="dynamicClickMessage"]');
    } 

    async clickDoubleClickButton() {
        await this.doubleClickButton.dblclick();
    }

    async clickRightClickButton() {
        await this.rightClickButton.click({ button: 'right' });
    }

    async clickClickMeButton() {
        await this.clickMeButton.click();
    }

    async assertDoubleClickMessageIsVisible() { 
        await expect(this.doubleClickMessage).toBeVisible();    
    }

    async assertRightClickMessageIsVisible() { 
        await expect(this.rightClickMessage).toBeVisible();    
    }   

    async assertDynamicClickMessageIsVisible() {    
        await expect(this.dynamicClickMessage).toBeVisible();
    }
}