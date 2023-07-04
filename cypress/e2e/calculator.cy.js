describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Do the number buttons update the display of the running total?', () => {
    // cy.get('#clear').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '437')
  })

  it('Do the arithmetical operations update the display with the result of the operation?', () => {
    // cy.get('#clear').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('Can multiple operations be chained together?', () => {
    // cy.get('#clear').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('Is the output as expected for positive numbers', () => {
    // cy.get('#clear').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('Is the output as expected for negative numbers', () => {
    // cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('Is the output as expected for decimal numbers', () => {
    cy.get('#number7').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.8')
  })

  it('Is the output as expected for very large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '330000')
  })

  it('should display Undefined if a number is divided by 0', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Undefined')
  })
})