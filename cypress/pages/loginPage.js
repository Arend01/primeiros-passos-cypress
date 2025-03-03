class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            LoginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().LoginButton).click()
    }

    checkAcessInvalid () {
    cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage