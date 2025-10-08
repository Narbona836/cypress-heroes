import userData from '../fixtures/userData.json';

describe('Create New Hero', () => {
  const seletores = {
    buttonLogar: 'li > .undefined',
    butonLogin: ".bg-blue-700",
    campoEmail:"[name='email']",
    campoPassword: "[name='password']",
    buttonLogout: "nav > .flex > :nth-child(2) > .undefined",
  //seletores para criar novo heroi
    buttonCreateNewHero: "[href='/heroes/new']",
    butonSave: ".text-white",
    campoName: "[type='text']",
    campoPreco: "[name='price']",
    campoFans:"[name='fans']",
    campoSalva: "[name='saves']",
    campoPowers: "[name='powers']",
    campoAvatar: "[data-cy='avatarFile']",
    botaoSalvar: ".text-white",

  }

  beforeEach(() => {
    cy.visit('/heroes')
    cy.get(seletores.buttonLogar).first().click()
    cy.get(seletores.campoEmail).type(userData.userSuccess.email)
    cy.get(seletores.campoPassword).type(userData.userSuccess.password)
    cy.get(seletores.butonLogin).click()
    cy.get(seletores.buttonLogout, { timeout: 10000 }).should('be.visible')
  })
  it('Deve criar um novo heroi', () => {
      cy.get(seletores.buttonCreateNewHero).click()
      cy.get(seletores.campoName).type('Homen de Ferro')
      cy.get(seletores.campoPreco).type('5000')
      cy.get(seletores.campoFans).type('100')
      cy.get(seletores.campoSalva).type('2000')
      cy.get(seletores.campoPowers).select('Fireball')
      cy.get(seletores.campoAvatar).selectFile('cypress/fixtures/avatar.jpg');
      cy.get(seletores.botaoSalvar).eq(1).click()
      cy.contains('Homen de Ferro').should('be.visible')
      cy.url().should('include', '/heroes')
    })
  it('Deve exibir mensagem de erro ao tentar criar heroi sem preencher os campos obrigatorios', () => {
      cy.get("[href='/heroes/new']").click()
      cy.get(seletores.botaoSalvar).eq(1).click()
      cy.get('.text-red-500').should('be.visible')
    })

  })
