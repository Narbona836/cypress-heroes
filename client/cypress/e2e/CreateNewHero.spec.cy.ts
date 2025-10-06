import userData from '../fixtures/userData.json';

describe('Create New Hero', () => {
  const seletores = {
    butonLogin: "button",
    campoEmail:"[name='email']",
    campoPassword: "[name='password']",
  //seletores para criar novo heroi
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
    cy.get("button").first().click()
    cy.get(seletores.campoEmail).type(userData.userSuccess.email)
    cy.get(seletores.campoPassword).type(userData.userSuccess.password)
    cy.get(seletores.butonLogin).contains('Sign in').click()
  })
  it('Deve criar um novo heroi', () => {
      cy.get("[href='/heroes/new']").click()
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
