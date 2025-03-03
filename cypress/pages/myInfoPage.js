class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text--arrow",
            secondIconComboBox: ".oxd-select-dropdown > :nth-child(3)",
            thirdIconComboBox: '.oxd-select-dropdown > :nth-child(2)',
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName,) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
    }

    fillEmployDetails(EmployeeId, OtherId, DriverlicenseNumber, expiryDate,) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriverlicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondIconComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdIconComboBox).click()
    }
}

export default MyInfoPage