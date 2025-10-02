
import userData from '../fixtures/userData.json'

describe('Login Page', () => {

  const seletores = {
    butonLogin: "button",
    campoEmail:"[name='email']",
    campoPassword: "[name='password']",
    butonSave: ".text-white",

  }
  it('Deve fazer o Login com sucesso', () => {
    cy.visit('/heroes')
    cy.get(seletores.butonLogin).eq(0).click()
    cy.get(seletores.campoEmail).type(userData.userSuccess.email)
    cy.get(seletores.campoPassword).type(userData.userSuccess.password)
    cy.get(seletores.butonSave).click()
    cy.get('header.text-gray-500 > .justify-between')
  })

  it('Deve exibir mensagem de erro ao inserir usuario invalido', () => {
    cy.visit('/heroes')
    cy.get(seletores.butonLogin).eq(0).click()
    cy.get(seletores.campoEmail).type(userData.userFail.email)
    cy.get(seletores.campoPassword).type(userData.userFail.password)
    cy.get(seletores.butonSave).click()
    cy.get('.text-red-500').should('be.visible')
  })
  })

