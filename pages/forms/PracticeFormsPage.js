import { expect } from "@playwright/test";
export class PracticeFormsPage {
    constructor(page) {
        this.page = page;
        this.practiceFormsMenuLocator = page.locator("div[class='practice-form-wrapper'] h1:contains('Practice Form')");
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.maleGenderRadioButton = page.locator('input[value="Male"]');
        this.femaleGenderRadioButton = page.locator("input[value='Female']");
        this.otherGenderRadioButton = page.locator("input[value='Other']");
        this.mobileNumberInput = page.getByPlaceholder('Mobile Number');
        this.dateOfBirthInput = page.locator('input[id="dateOfBirthInput"]')
        this.subjectsInput = page.locator("div[class*='subjects-auto-complete'] input");
        this.subjectOptionDropdown = page.locator("input[class*='subjects-auto']")
        this.sportsHobbiesCheckbox = page.locator("input[id='hobbies-checkbox-1']");
        this.readingHobbiesCheckbox = page.locator("input[id='hobbies-checkbox-2']");
        this.musicHobbiesCheckbox = page.locator("input[id='hobbies-checkbox-3']");
        this.currentAddressInput = page.getByPlaceholder('Current Address');
        this.stateDropdown = page.locator("div[id*='react-select']").filter({ hasText: 'Select State' });
        this.cityDropdown = page.locator("div[id*='react-select']").filter({ hasText: "Select City" });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.uploadPictureInput = page.locator('input[id="uploadPicture"]');
        this.stateSelector = page.locator("input[id='react-select-3-input'][aria-activedescendant*='option']");
        this.rows = page.locator('div[class*="table table-dark "] tbody tr');
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

    async selectMaleGender() {
        await this.maleGenderRadioButton.check();

    }

    async selectFemaleGender() {
        await this.femaleGenderRadioButton.check();
    }

    async selectOtherGender() {
        await this.otherGenderRadioButton.check();
    }

    async enterMobileNumber(mobileNumber) {
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async enterDateOfBirth(dateOfBirth) {
        await this.dateOfBirthInput.fill(dateOfBirth);
    }

    async enterSubjects(subjects) {
        for (const subject of subjects) {
            await this.subjectsInput.fill(subject);
            await this.page.getByRole('option', { name: subject }).click()
        }
    }

    async selectSportsHobby() {
        await this.sportsHobbiesCheckbox.click();
    }

    async selectReadingHobby() {
        await this.readingHobbiesCheckbox.click();
    }

    async selectMusicHobby() {
        await this.musicHobbiesCheckbox.click();
    }

    async selectPictureToUpload(filePath) {
        await this.uploadPictureInput.setInputFiles(filePath);
    }

    async enterCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
    }

    async selectState(state) {
        await this.stateDropdown.click({ force: true });
        await this.page.getByRole('option', { name: state }).click()
    }

    async selectCity(city) {
        await this.cityDropdown.click({ force: true });
        await this.page.getByRole('option', { name: city }).click()
    }

    async selectPictureToUpload(filePath) {
        await this.uploadPictureInput.setInputFiles(filePath);
    }

    async enterCurrentAddress(address) {
        await this.currentAddressInput.fill(address);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async assertOutputValuesAreVisible(inputData, outputData) {
        const count = await this.rows.count();
        for (let i = 0; i < count; i++) {
            const row = this.rows.nth(i);
            const cells = row.locator('td');
            const text = await cells.nth(0).textContent();
            if (text.trim() === inputData) {
                await expect(cells.nth(1)).toHaveText(outputData);
                break;
            }

        }
    }

    async assertFirstNameFieldIsRequired() {
        await expect(this.firstNameInput).toHaveAttribute('required', '');
    }

    async assertLastNameFieldIsRequired() {
        await expect(this.lastNameInput).toHaveAttribute('required', '');
    }

    async assertMobileNumberFieldIsRequired() {
        await expect(this.mobileNumberInput).toHaveAttribute('required', '');
    }

}