///testes para barra de navegação
/// <reference types="cypress"/>


//descrição do teste (describe)

describe("Testes da barra de navegação", () => {
    //visitar o site
    //localizar os elementos
    //realizar ação (clicar)
    //validação do carregamento da página (validar = assertion)
    before(() => {
        cy.visit('/')
    })

    it('Deve acessar a área "channel" ao clicar no botão', () => {
            cy.get(`[title='Channel']`).click()
            cy.url().should('contain', '/channel')
            cy.contains('cinza').scrollIntoView()
            cy.get('.medium-article-feed-layout-1').should('be.visible')

    })


    it('Deve acessar a área "sobre mim" ao clicar no botão', () => {
        cy.get(`[title='Sobre mim']`).click()
        cy.url().should('contain', '/sobre-mim')

    })

    it.only('Deve acessar a área "contato" ao clicar no botão', () => {
        cy.get(`[title='Contato']`).click()
        cy.url().should('contain', '/contato')
        cy.get('#8fd1-275a-ac3d-bb09').type('Fulano')

    })

    it('Deve acessar a área "serviços" ao clicar no botão', () => {
        cy.get(`[title='Serviços']`).click()
        cy.url().should('contain', '/servicos')

    })
})
