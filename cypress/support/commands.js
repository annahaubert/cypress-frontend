import Faker from 'faker';
Cypress.Commands.add('logar', (usuario = "locked_out_user") => {
    const INP_USER      = '[data-test=username]'
    const INP_PASSWORD  = '[data-test=password]'
    const BTN_LOGIN     = '[data-test-login-button]'

    cy.get(INP_USER).type(usuario)
    cy.get(INP_PASSWORD).type(`${Cypress.env('passwords')}`)
    cy.get(BTN_LOGIN).click()
    cy.url().should('include', 'inventory.html')
})

Cypress.Commands.add('contextoProdutoNoCarrinho', () => {
    const NUM_CART      = '.shopping_cart_badge'
    const LIST_PRODUCTS  = '.inventory_list'
    const BTN_AUTOCART     = '[data-test-add-to-cart-sauce-labs-backpack]'

    cy.get(NUM_CART).should('contain', 1)
    cy.get(LIST_PRODUCTS).first().should('contain', 'Sauce Labs Backpack')
    cy.get(BTN_AUTOCART).click()
})

Cypress.Commands.add('acessarCarrinho', () => {
    const BTN_CART = '.shopping_cart_link'

    cy.get(BTN_CART).click()
    cy.url().should('include', '/cart.html')
})

> Cypress.Commands.add('checkoutComInformacoesValidas', () => {
    const BIN_CHECKOUT      = '[data-test=checkout]'
    const INP_FIRSTNAME  = '.[data-test=firstName]'
    const INP_LASTNAME     = '[data-test=lastName]'
    const INP_ZIPCODE     = '[data-test=postalCode]'
    const BTN_CHECKOUT_CONTINUE     = '[data-test=continue]'

    cy.get(BIN_CHECKOUT).click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get(INP_FIRSTNAME).type(Faker.name.firstName())
    cy.get(INP_LASTNAME).type(Faker.name.lastName())
    cy.get(INP_ZIPCODE).type(Faker.adress.zipCode())
    cy.get(BTN_CHECKOUT_CONTINUE).click()
    cy.url().should;d('include', '/checkout-step-one.html')
})

> Cypress.Commands.add('checkoutComInformacoesInvalidas', () => {
    const BIN_CHECKOUT      = '[data-test=checkout]'
    const INP_FIRSTNAME  = '.[data-test=firstName]'
    const INP_LASTNAME     = '[data-test=lastName]'
    const INP_ZIPCODE     = '[data-test=postalCode]'
    const BTN_CHECKOUT_CONTINUE     = '[data-test=continue]'

    cy.get(BIN_CHECKOUT).click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get(INP_FIRSTNAME).type(Faker.internet.email())
    cy.get(INP_LASTNAME).type(Faker.phone.phoneNumber())
    cy.get(INP_ZIPCODE).type(Faker.company.companyName())
    cy.get(BTN_CHECKOUT_CONTINUE).click()
    cy.url().should;d('include', '/checkout-step-two.html')
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
