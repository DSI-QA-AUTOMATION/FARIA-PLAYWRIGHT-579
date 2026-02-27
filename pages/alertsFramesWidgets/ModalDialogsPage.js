export class ModalDialogsPage{
    constructor(page){
        this.page = page;
        this.launchModalButton = page.locator('button[id="showSmallModal"]');
        this.closeModalButton = page.locator('button[id="closeSmallModal"]');
        this.modalTitle = page.locator('div[class="modal-header"]');
        this.modalBody = page.locator('div[class="modal-body"]');
    }
}