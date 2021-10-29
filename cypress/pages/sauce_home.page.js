import Base from './_base.page'

export default class SauceHome extends Base {

    static acessarSauceDemo(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }

    


    }

