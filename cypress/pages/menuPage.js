class MenuPage {
    
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            myPerformancebutton: "[href='/web/index.php/performance/viewPerformanceModule']",
            myRecruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myDirectoryButton: "[href='/web/index.php/directory/viewDirectory']",
            myMantenanceButon: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            myClaimButton: "[href='/web/index.php/claim/viewClaimModule']",
            myBuzzButton: "[href='/web/index.php/buzz/viewBuzz']",
            myAdminButton: "[href='/web/index.php/admin/viewAdminModule']",
            myPimButton: "[href='/web/index.php/pim/viewPimModule']",
            myLeaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            myTimeButton: "[href='/web/index.php/time/viewTimeModule']"
        }

        return selectors
    }
        acessMyinfo() {
        cy.get(this.selectorsList().myInfoButton).click()
        }

        acessPerformance() {
        cy.get(this.selectorsList().myPerformancebutton).click()
        }

        acessDirectory() {
        cy.get(this.selectorsList().myDirectoryButton).click()
        }

        acessMaintenance() {
        cy.get(this.selectorsList().myMantenanceButon).click()
        }

        acessClaim() {
        cy.get(this.selectorsList().myClaimButton).click()
        }

        acessBuzz() {
        cy.get(this.selectorsList().myBuzzButton).click()
        }

        acessAdmin() {
        cy.get(this.selectorsList().myAdminButton).click()
        }

        acessPIM() {
        cy.get(this.selectorsList().myPimButton).click()
        }

        acessLeave() {
        cy.get(this.selectorsList().myLeaveButton).click()
        }

        acessTime() {
        cy.get(this.selectorsList().myTimeButton).click()
        }

        acessRecruitment() {
        cy.get(this.selectorsList().myRecruitmentButton).click()
        }
        
    
        
}

export default MenuPage