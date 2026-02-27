export class FormsPage {
    constructor(page) {
        this.page = page;
        this.practiceFormMenuLocator = page.locator('span[class="text"]').filter({ hasText: 'Practice Form' });
    }   

    async navigateToPracticeFormMenu() {
        await this.practiceFormMenuLocator.click();
        let PracticeFormsPage = require('./PracticeFormsPage').PracticeFormsPage;
        return new PracticeFormsPage(this.page);
    }   
}