export class Utils {
    constructor(page) {
        this.page = page;
    }
    async getRowValuesByText(page, tableSelector, searchText) {
        const row = page.locator(`${tableSelector} tbody tr`, { hasText: searchText });
        const cells = row.locator('td');
        const count = await cells.count();
        const values = [];
        for (let i = 0; i < count; i++) {
            const text = await cells.nth(i).textContent();
            values.push(text ? text.trim() : '');
        }
        return values;
    }

    async waitForTimeOut(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

}
