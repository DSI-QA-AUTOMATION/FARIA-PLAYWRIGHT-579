const menuLocator = "span[class='text']";
import { AlertsPage } from './AlertsPage';
export class AlertsFramesWindowsPage{
    constructor(page){
        this.page = page;
        this.browswerWindowsMenu = page.locator(`${menuLocator}:has-text("Browser Windows")`);
        this.alertsMenu = page.locator(`${menuLocator}:has-text("Alerts")`);
        this.framesMenu = page.locator(`${menuLocator}:has-text("Frames")`);
        this.nestedFramesMenu = page.locator(`${menuLocator}:has-text("Nested Frames")`);
        this.modalDialogsMenu = page.locator(`${menuLocator}:has-text("Modal Dialogs")`);
       
    }
     async navigateToBrowserWindowsMenu() {
        await this.browswerWindowsMenu.click();
        let browserPage = require('./BrowserWindowsPage').BrowserWindowsPage;
        return new browserPage(this.page);
    }

    async navigateToAlertsMenu() {
        await this.alertsMenu.click();
        return new AlertsPage(this.page);
    }

    async navigateToFramesMenu() {
        await this.framesMenu.click();
        let framesPage = require('./FramesPage').FramesPage;
        return new framesPage(this.page);
    }

    async navigateToNestedFramesMenu() {
        await this.nestedFramesMenu.click();
        let nestedFramesPage = require('./NestedFramesPage').NestedFramesPage;
        return new nestedFramesPage(this.page);
    }

    async navigateToModalDialogsMenu() {
        await this.modalDialogsMenu.click();
        let modalDialogsPage = require('./ModalDialogsPage').ModalDialogsPage;
        return new modalDialogsPage(this.page);
    }

}