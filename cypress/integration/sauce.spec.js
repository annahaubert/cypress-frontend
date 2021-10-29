///testes sauce
/// <reference types="cypress"/>

import SauceLogin from '../pages/souce_login.page'

    describe("Testes do site sauce demo", () => {
        beforeEach(() => {
            SauceLogin.acessarSauceDemo
        })

        context('Deve estar com um produto no carrinho', () => {
            beforeEach(() => {
                    const usuario = 'locked_out_user'

                    SauceLogin.logar(usuario)
                    cy.contextoProdutoNoCarrinho()
            })

            it('Deve realizar o checkout com infos válidas', () => {
                    cy.acessarCarrinho()
                    cy.checkoutComInformacoesValidas()

            })

            it('Deve realizar o checkout com infos inválidas', () => {
                    cy.acessarCarrinho()
                    cy.checkoutComInformacoesInvalidas()

            })

        })

    })
