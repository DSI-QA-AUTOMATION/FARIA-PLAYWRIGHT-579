import {expect } from '@playwright/test';
import { ElementsPage } from '../elements/ElementsPage';
const cardLocator = "div[class*='card-body']"
let elementPage;
export class HomePage {
    constructor(page) {

        this.page = page;
        this.homePageUrl = 'https://demoqa.com/';
        this.elementsCardLocator = page.locator(`${cardLocator}:has-text("Elements")`);
        this.formsCardLocator = page.locator(`${cardLocator}:has-text("Forms")`);
        this.AlertsCardLocator = page.locator(`${cardLocator}:has-text("Alerts, Frame & Windows")`);
        this.WidgetsCardLocator = page.locator(`${cardLocator}:has-text("Widgets")`);
        this.InteractionsCardLocator = page.locator(`${cardLocator}:has-text("Interactions")`);
        this.BooksCardLocator = page.locator(`${cardLocator}:has-text("Book Store Application")`);
    }
    async visitHomePage() {
        await this.page.goto(this.homePageUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000,
        });
    }

    async assertElemetsCardIsVisible() {
        await expect(this.elementsCardLocator).toBeVisible();
    }

    async assertFormsCardIsVisible() {
        await expect(this.formsCardLocator).toBeVisible();
    }

    async assertAlertsCardIsVisible() {
        await expect(this.AlertsCardLocator).toBeVisible();
    }

    async assertWidgetsCardIsVisible() {
        await expect(this.WidgetsCardLocator).toBeVisible();
    }

    async assertInteractionsCardIsVisible() {
        await expect(this.InteractionsCardLocator).toBeVisible();
    }

    async assertBooksCardIsVisible() {
        await expect(this.BooksCardLocator).toBeVisible();
    }

    async navigateToElementsPage() {
        await this.elementsCardLocator.click();
    }

    async returnNewHomePageUrl() {
       await this.page.waitForLoadState('domcontentloaded');
       return this.homePageUrl;
    }
}