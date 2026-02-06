const menuLocator = "span[class='text']";
export class ElementsPage {
    constructor(page) {
        this.page = page;
        this.textBoxMenuLocator = page.locator(`${menuLocator}:has-text("Text Box")`);
        this.checkBoxMenuLocator = page.locator(`${menuLocator}:has-text("Check Box")`);
        this.radioButtonMenuLocator = page.locator(`${menuLocator}:has-text("Radio Button")`);
        this.webTablesMenuLocator = page.locator(`${menuLocator}:has-text("Web Tables")`);
        this.buttonsMenuLocator = page.locator(`${menuLocator}:has-text("Buttons")`);
        this.linksMenuLocator = page.locator(`${menuLocator}:has-text("Links")`);
        this.UploadDownloadMenuLocator = page.locator(`${menuLocator}:has-text("Upload and Download")`);
    }

    async navigateToTextBoxMenu() {
        await this.textBoxMenuLocator.click();
        let textBoxPage = require('./TextBoxPage').TextBoxPage;
        return new textBoxPage(this.page);
    }

    async navigateToCheckBoxMenu() {
        await this.checkBoxMenuLocator.click();
        let CheckboxPage = require('./CheckboxPage').CheckboxPage;
        return new CheckboxPage(this.page);

    }

    async navigateToRadioButtonMenu() {
        await this.radioButtonMenuLocator.click();
        let RadioButtonPage = require('./RadioButtonPage').RadioButtonPage;
        return new RadioButtonPage(this.page);
    }

    async navigateToWebTablesMenu() {
        await this.webTablesMenuLocator.click();
        let WebTablesPage = require('./WebTablesPage').WebTablesPage;
        return new WebTablesPage(this.page);
    }

    async navigateToButtonsMenu() {
        await this.buttonsMenuLocator.click();
        let ButtonsPage = require('./ButtonsPage').ButtonsPage;
        return new ButtonsPage(this.page);
    }

    async navigateToLinksMenu() {
        await this.linksMenuLocator.click();
        let LinksPage = require('./LinksPage').LinksPage;
        return new LinksPage(this.page);
    }

    async navigateToUploadDownloadMenu() {
        await this.UploadDownloadMenuLocator.click();
        let UploadDownloadPage = require('./UploadDownloadPage').UploadDownloadPage;
        return new UploadDownloadPage(this.page);
    }
}
