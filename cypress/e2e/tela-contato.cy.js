describe('fazer upload de um arquivo', () => {
  it('Deve emviar uma mensagem e subir um arquivo', () => {
  cy.visit('https://automationexercise.com/contact_us')
  
  
  cy.get('[data-qa="name"]').type('Anthony Lima')
  cy.get('[data-qa="email"]').type('Lima@gmail.com')
  cy.get('[data-qa="subject"]').type('Dúvida')
  cy.get('[data-qa="message"]').type('Gostaria de tirar uma dúvida sobre o sistema ')

  cy.get('[name="upload_file"]').selectFile('cypress/fixtures/example.json')
  cy.get('[data-qa="submit-button"]').click()
  
  cy.get('.status.alert-success').should('be.visible').and('contain', 'Success! Your details have been submitted successfully.')
  cy.get('#form-section > .btn').click()
})
})