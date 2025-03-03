import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login orage HRM tests', () => {

const Selectorslist = {
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

  it('login - fail', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()

  })

  it('login - sucess', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashbordPage()

  })

})