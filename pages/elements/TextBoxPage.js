import { expect } from '@playwright/test';
export class TextBoxPage {
    constructor(page) {
        this.page = page;
        this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator("textarea[id='permanentAddress']");   
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.outputNameLocator = page.locator('#name');
        this.outputEmailLocator = page.locator('#email');
        this.outputCurrentAddressLocator = page.locator("p[id='currentAddress']")
        this.outputPermanentAddressLocator = page.locator("p[id='permanentAddress']");
        this.outputBoxLocator = page.locator("div[class*='border']");
    }

    async enterFullName(name) {
        await this.fullNameInput.fill(name);
        return this;
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
        return this;
    }           

    async enterCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
        return this;
    }   

    async enterPermanentAddress(address) {
        await this.permanentAddressInput.fill(address);
        return this;
    }   

    async clickSubmitButton() {
        await this.submitButton.click();
        return this;
    }   

    async assertOutputNameIsVisible(name) { 
        await expect(this.outputNameLocator).toContainText(name);
    }   

    async assertOutputEmailIsVisible(email) {    
        await expect(this.outputEmailLocator).toContainText(email);
    }

    async assertOutputCurrentAddressIsVisible(address) {
        await expect(this.outputCurrentAddressLocator).toContainText(address);
    }   

    async assertOutputPermanentAddressIsVisible(address) {
        await expect(this.outputPermanentAddressLocator).toContainText(address);
    }

    async assertNameFieldIsNotVisibleInOutput(){
        await expect(this.outputBoxLocator).not.toContainText('Name:'); 
    }

    async assertEmailFieldIsNotVisibleInOutput(){
        await expect(this.outputBoxLocator).not.toContainText('Email:'); 
    }

    async assertOutputCurrentAddressIsNotVisibleInOutput(){
        await expect(this.outputBoxLocator).not.toContainText('Current Address:'); 
    }

    async assertOutputPermanentAddressIsNotVisibleInOutput(){
        await expect(this.outputBoxLocator).not.toContainText('Permanent Address:'); 
    }

    async assertOutputBoxIsNotVisible(){
        await expect(this.outputBoxLocator).not.toBeVisible(); 
    }
}