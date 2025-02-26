import userData from '../fixtures/userData.json'

describe('orage HRM tests', () => {

const Selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  LoginButton: "[type='submit']",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']",
  genericComboBox: ".oxd-select-text--arrow",
  secondIconComboBox: ".oxd-select-dropdown > :nth-child(3)",
  thirdIconComboBox: '.oxd-select-dropdown > :nth-child(2)',
}

  it.only('User Info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(Selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(Selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(Selectorslist.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(Selectorslist.dashboardGrid)
    cy.get(Selectorslist.myInfoButton).click()
    cy.get(Selectorslist.firstNameField).type('FirstNameTest')
    cy.get(Selectorslist.lastNameField).type('LastNameTest')
    cy.get(Selectorslist.genericField).eq(3).clear().type('Employee')
    cy.get(Selectorslist.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(Selectorslist.genericField).eq(5).clear().type('DriverlicenseTest')
    cy.get(Selectorslist.genericField).eq(6).clear().type('2025-02-23')
    cy.get(Selectorslist.dateCloseButton).click()
    cy.get(Selectorslist.submitButton).eq(1).click({force: true})
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')

    cy.get(Selectorslist.genericComboBox).eq(0).click({force: true})
    cy.get(Selectorslist.secondIconComboBox).click()
    cy.get(Selectorslist.genericComboBox).eq(1).click({force: true})
    cy.get(Selectorslist.thirdIconComboBox).click()

  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(Selectorslist.usernameField).type(userData.userFail.username)
    cy.get(Selectorslist.passwordField).type(userData.userFail.username)
    cy.get(Selectorslist.LoginButton).click()
    cy.get(Selectorslist.wrongCredentialAlert)
  })
})