describe ('Test E2E', () => {
  it ('Visit the app e clica no menu para mudar página', () => {
    cy.visit ('https://project-semantix.herokuapp.com/')
    .get('.menu ul li:last a')
    .click()
  })
})