import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('orage HRM tests', () => {

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

  it('User Info Update - sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashbordPage()
    
    menuPage.acessMyinfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployDetails(chance.d4(), chance.d8(), chance.cf(), chance.date({string: true}))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })
})