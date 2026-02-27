export class NestedFramesPage{    
    constructor(page){
        this.page = page;
        this.parentFrameLocator = page.frameLocator('iframe[id="frame1"]');
        this.childFrameLocator = this.parentFrameLocator.frameLocator('iframe');
    } 
}