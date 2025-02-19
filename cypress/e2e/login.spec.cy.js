describe('orage HRM tests', () => {

const Selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  LoginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']"
}


  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(Selectorslist.usernameField).type('Admin')
    cy.get(Selectorslist.passwordField).type('admin123')
    cy.get(Selectorslist.LoginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(Selectorslist.sectionTitleTopBar).contains('Dashboard')
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(Selectorslist.usernameField).type('test')
    cy.get(Selectorslist.passwordField).type('test')
    cy.get(Selectorslist.LoginButton).click()
    cy.get(Selectorslist.wrongCredentialAlert)
  })
})