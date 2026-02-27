import { expect } from "@playwright/test";
export class UploadDownloadPage {
    constructor(page) {
        this.page = page;
        this.downloadButton = page.locator('a[id="downloadButton"]');
        this.uploadInput = page.locator('input[id="uploadFile"]');
        this.uploadedFilePathLocator = page.locator('p[id="uploadedFilePath"]');
    }

    async clickDownloadButton() {
        await this.downloadButton.click();
    }

    async uploadFile(filePath) {
        await this.uploadInput.setInputFiles(filePath);
    }   

    async assertUploadedFilePathIsVisible(filePath) {
        await expect(this.uploadedFilePathLocator).toHaveText(filePath);
    }       

    async assertFileIsDownloaded(filePath) {
        const fileName = filePath.split('\\').pop().split('/').pop();
        const downloadPath = await this.page.waitForEvent('download');
        const downloadedFilePath = await downloadPath.path();
        expect(downloadedFilePath).toContain(fileName);
    } 

    async clickDownloadButtonAndAssertFileIsDownloaded(fileName) {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadButton.click(),
        ]);
        const downloadedFilePath = await download.path();
        expect(downloadedFilePath).toContain(fileName);
    }
}
