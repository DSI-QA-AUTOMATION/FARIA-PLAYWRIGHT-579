import { expect } from '@playwright/test';
let parent;
export class CheckboxPage {

    constructor(page) {
        this.page = page;
        this.homeTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Home' });
        let parent = this.homeTextTitle.locator('..').locator('..');
        this.homeToggleButton = parent.locator('button[title="Toggle"]');
        this.homeCheckBox = this.homeTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.desktopTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Desktop' });
        this.desktopCheckBox = this.desktopTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.documentsTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Documents' });
        this.documentsCheckBox = this.documentsTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.downloadsTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Downloads' });
        this.downloadsCheckBox = this.downloadsTextTitle.locator('..').locator("span[class='rct-checkbox']");
        let documentParent = this.documentsTextTitle.locator('..').locator('..');
        this.documentToggleButton = documentParent.locator('button[title="Toggle"]');
        this.workspaceTextTitle = page.locator('span[class="rct-title"]', { hasText: 'WorkSpace' });
        let workspaceParent = this.workspaceTextTitle.locator('..').locator('..');
        this.workspaceToggleButton = workspaceParent.locator('button[title="Toggle"]');
        this.workspaceCheckBox = this.workspaceTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.reactTextTitle = page.locator('span[class="rct-title"]', { hasText: 'React' });
        this.reactCheckBox = this.reactTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.angularTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Angular' });
        this.angularCheckBox = this.angularTextTitle.locator('..').locator("span[class='rct-checkbox']");
        this.veuTextTitle = page.locator('span[class="rct-title"]', { hasText: 'Veu' });
        this.veuCheckBox = this.veuTextTitle.locator('..').locator("span[class='rct-checkbox']");
    }

    async clickHomeToggleButton() {
        await this.homeToggleButton.click();
    }

    async checkHomeCheckBox() {
        await this.homeTextTitle.click();
    }

    async assertHomeCheckBoxIsChecked() {
        await expect(this.homeCheckBox).toBeChecked();
    }

    async assertDesktopFolderIsVisible() {
        await expect(this.desktopTextTitle).toBeVisible();
    }

    async assertDocumentsFolderIsVisible() {
        await expect(this.documentsTextTitle).toBeVisible();
    }

    async assertDownloadsFolderIsVisible() {
        await expect(this.downloadsTextTitle).toBeVisible();
    }

    async clickDocumentToggleButton() {
        await this.documentToggleButton.click();
    }

    async assertWorkSpaceFolderIsVisible() {
        await expect(this.workspaceTextTitle).toBeVisible();
    }

    async clickWorkSpaceToggleButton() {
        await this.workspaceToggleButton.click();
    }

    async assertReactFolderIsVisible() {
        await expect(this.reactTextTitle).toBeVisible();
    }

    async assertAngularFolderIsVisible() {
        await expect(this.angularTextTitle).toBeVisible();
    }

    async assertVeuFolderIsVisible() {
        await expect(this.veuTextTitle).toBeVisible();
    }

    async checkWorkSpaceReactCheckBox() {
        await this.workspaceCheckBox.click();
    }


    async assertWorkSpaceReactCheckBoxIsChecked() {
        await expect(this.workspaceCheckBox).toBeChecked();
    }

    async assertReactCheckboxIsChecked() {
        await expect(this.reactCheckBox).toBeChecked();
    }

    async assertAngularCheckboxIsChecked() {
        await expect(this.angularCheckBox).toBeChecked();
    }

    async assertVeuCheckboxIsChecked() {
        await expect(this.veuCheckBox).toBeChecked();
    }

    async assertDocumentsCheckBoxIsChecked() {
        await expect(this.documentsCheckBox).toBeChecked();
    }

    async assertDownloadsCheckBoxIsChecked() {
        await expect(this.downloadsCheckBox).toBeChecked(); 
        }

    async assertDesktopCheckBoxIsChecked() {
        await expect(this.desktopCheckBox).toBeChecked();
    }

    async assertHomeCheckBoxIsNotChecked() {
        await expect(this.homeCheckBox).not.toBeChecked();
     }

     async assertDesktopCheckBoxIsNotChecked() {
        await expect(this.desktopCheckBox).not.toBeChecked();
     }

     async assertDocumentsCheckBoxIsNotChecked() {
        await expect(this.documentsCheckBox).not.toBeChecked();
     }

     async assertDownloadsCheckBoxIsNotChecked() {
        await expect(this.downloadsCheckBox).not.toBeChecked();
     }

}