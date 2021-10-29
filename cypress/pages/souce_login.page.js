import Base from './_base.page'
import {LOGIN as LG} from './components/sauce.elements'

const INP_USER      = '[data-test=username]',
const INP_PASSWORD  = '[data-test=password]',
const BTN_LOGIN     = '[data-test-login-button]',
const IMG_LOGO      = '.login_logo'


export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit(`${Cypress.env('BASE_URL')}`)
    }

    static logar(usuario = "locked_out_user"){
        super.typeValue(INP_USER, usuario)
        super.typeValue(INP_PASSWORD, `${Cypress.env('password')}`)
        super.clickOnElement(BTN_LOGIN)
        super.validarUrl('/inventory.html')

    }


}