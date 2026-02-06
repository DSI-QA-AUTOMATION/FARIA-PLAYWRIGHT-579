const { expect } = require('@playwright/test');
export class RadioButtonPage {
    constructor(page) { 
        this.page = page;  
        this.yesRadioButton = page.locator('label').filter({ hasText: 'Yes' }); 
        this.impressiveRadioButton = page.locator('label').filter({ hasText: 'Impressive' });
        this.noRadioButton = page.locator('input[id*="noRadio"]');
        this.selectedRadioButtonText = page.locator("span[class='text-success']");
    }

    async clickYesRadioButton() {
        await this.yesRadioButton.click();
    }   

    async clickImpressiveRadioButton() {       
        await this.impressiveRadioButton.click();
    }

    async clickNoRadioButton() {       
        await this.noRadioButton.click();
    }

    async assertYesRadioButtonIsSelected() {
        await expect(this.selectedRadioButtonText).toHaveText('Yes');
    }

    async assertImpressiveRadioButtonIsSelected() {
        await expect(this.selectedRadioButtonText).toHaveText('Impressive');
    }

    async assertCannotSelectNoRadioButton() { 
        await expect(this.noRadioButton).toBeDisabled();
    }
}
