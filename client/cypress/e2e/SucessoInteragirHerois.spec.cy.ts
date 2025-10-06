import userData from '../fixtures/userData.json';

describe('Sucesso ao Interagir com Herois', () => {

    const seletores = {
        //seletores para login
        butonLogin: "button",
        campoEmail:"[name='email']",
        campoPassword: "[name='password']",
        botaoCreateNewHero: "[href='/heroes/new']",
        //seletores para interagir com herois
        botaoLike: "[data-cy='like']",
        fans:"[data-cy='fans']",
        botaoMoney: "[data-cy='money']",
        botaoConfContrateHeroi: ".bg-red-600",
        //seletor para editar heroi
        botaoEditarHeroi: "[data-cy='pencil']",
        campoName:"[name='name']",
        campoPrice:"[name='price']",
        campoFans:"[name='fans']",
        campoSaves: "[data-cy='savesInput']",
        campoPower:"(':nth-child(5) > .mb-2')",
        campoAvatar:"[data-cy='avatarFile']",
        botaoSubmit: ".bg-blue-700",

}

  beforeEach(() => {
    cy.visit('/heroes')
    cy.get("button").first().click()
    cy.get(seletores.campoEmail).type(userData.userSuccess.email)
    cy.get(seletores.campoPassword).type(userData.userSuccess.password)
    cy.get(seletores.butonLogin).contains('Sign in').click()
    cy.get('header.text-gray-500 > .justify-between', { timeout: 10000 }).should('be.visible')

  })

  it('Deve conseguir interagir com os heróis', () => {
    cy.visit('/heroes')
    cy.get(seletores.botaoLike).eq(2).click()
    cy.get(seletores.botaoMoney).eq(2).click()
    cy.get(seletores.botaoConfContrateHeroi).click()
    cy.get(seletores.botaoEditarHeroi).eq(2).should('be.visible').click()
    cy.get(seletores.campoName).clear().type('Heroi Editado')
    cy.get(seletores.campoPrice).clear().type('500')
    cy.get(seletores.campoFans).clear().type('50')
    cy.get(seletores.campoSaves).clear().type('150')
    cy.get(seletores.campoAvatar).selectFile('cypress/fixtures/avatar.jpg');
    cy.get(seletores.botaoSubmit).eq(1).click()
 })
})

