describe('Falha ao Interagir com Herois', () => {

    const seletores = {
        botaoLike: "[data-cy='like']",
        botaoLikeError: ".justify-end",
        botaoMoney: "[data-cy='money']",
        botaoMoneyError:".justify-end"

  }
  it('Deve exibir mensagem de erro ao interagir com heróis', () => {
    cy.visit('/heroes')
    cy.get(seletores.botaoLike).eq(2).click()
    cy.get(seletores.botaoLikeError).should('be.visible').click()
    cy.get(seletores.botaoMoney).eq(2).click({force:true})
    cy.get(seletores.botaoMoneyError).should('be.visible').click()
  })
})
