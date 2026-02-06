export class WebTablesPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator('button[id="addNewRecordButton"]');
        this.firstNameInput = page.locator('input[id="firstName"]');
        this.lastNameInput = page.locator('input[id="lastName"]');
        this.emailInput = page.locator('input[id="userEmail"]');
        this.ageInput = page.locator('input[id="age"]');
        this.salaryInput = page.locator('input[id="salary"]');
        this.departmentInput = page.locator('input[id="department"]');
        this.submitButton = page.locator('button[id="submit"]');
        this.tableCellsSelector = page.locator('div[class="rt-td"]');
        this.tableSelector = page.locator('div[class="rt-table"]');
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterAge(age) {
        await this.ageInput.fill(age);
    }

    async enterSalary(salary) {
        await this.salaryInput.fill(salary);
    }

    async enterDepartment(department) {
        await this.departmentInput.fill(department);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async assertThatValueIsInTable(expectedValue) {
        await this.tableCellsSelector.filter({ hasText: expectedValue }).first().isVisible();
    }

    }