import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('orage HRM tests', () => {

const Selectorslist = {
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
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashbordPage()
    menuPage.acessMyinfo()

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