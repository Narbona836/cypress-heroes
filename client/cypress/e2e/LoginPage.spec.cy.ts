
import userData from '../fixtures/userData.json'

describe('Login Page', () => {

  const seletores = {
    butonLogin: "button",
    campoEmail:"[name='email']",
    campoPassword: "[name='password']",
    butonSave: ".text-white",
    buttonLogout: "nav > .flex > :nth-child(2) > .undefined",

  }
  it('Deve fazer o Login com sucesso', () => {
    cy.visit('/heroes')
    cy.get(seletores.butonLogin).eq(0).click()
    cy.get(seletores.campoEmail).type(userData.userSuccess.email)
    cy.get(seletores.campoPassword).type(userData.userSuccess.password)
    cy.get(seletores.butonSave).click()
    cy.get(seletores.buttonLogout, { timeout: 10000 }).should('be.visible')
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

