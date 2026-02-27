export class BrowserWindowsPage{
    constructor(page){
        this.page = page;
        this.newTabButton = page.locator('button[id="tabButton"]');
        this.newWindowButton = page.locator('button[id="windowButton"]');
        this.newWindowMessageButton = page.locator('button[id="messageWindowButton"]');
    }   
}