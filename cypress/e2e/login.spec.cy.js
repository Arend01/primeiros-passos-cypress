import userData from '../fixtures/userData.json'

describe('orage HRM tests', () => {

const Selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  LoginButton: "[type='submit']",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']"
}

  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(Selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(Selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(Selectorslist.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(Selectorslist.dashboardGrid)
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(Selectorslist.usernameField).type(userData.userFail.username)
    cy.get(Selectorslist.passwordField).type(userData.userFail.username)
    cy.get(Selectorslist.LoginButton).click()
    cy.get(Selectorslist.wrongCredentialAlert)
  })
})