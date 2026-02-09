import { expect } from '@playwright/test';
export class LinksPage {
    constructor(page) {
        this.page = page;
        this.homeLink = page.locator('a[id="simpleLink"]');
        this.createdLink = page.locator('a[id="created"]');
        this.noContentLink = page.locator('a[id="no-content"]');
        this.movedLink = page.locator('a[id="moved"]');
        this.linkResponse = page.locator('p[id="linkResponse"]');
    }  

    async clickHomeLink() {
        await this.homeLink.click();
    }

    async clickCreatedLink() {
        await this.createdLink.click();
    }

    async clickNoContentLink() {  
        await this.noContentLink.click();
    }

    async clickMovedLink() {
        await this.movedLink.click();
    }

    async assertClickingHomeLinkOpensNewTabWithCorrectURL(newPageLink) {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.homeLink.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        const newPageURL = newPage.url();
        expect(newPageURL).toBe(newPageLink);
    }
}