export class FramesPage{    
    constructor(page){
        this.page = page;
        this.frame1Locator = page.frameLocator('iframe[id="frame1"]');
        this.frame2Locator = page.frameLocator('iframe[id="frame2"]');
    }   
}