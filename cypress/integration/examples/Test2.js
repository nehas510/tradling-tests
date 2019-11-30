describe("Tradling Assignment", () => {
    it("Second test", () => {
        
    cy.visit("https://www.binance.com/en/trade/ETH_BTC");
    cy.wait(2000)
    const amount = '2';
    cy.get('#FormRow-BUY-quantity').type(amount).click()

    cy.get('#FormRow-BUY-price').invoke('val')  // for input or textarea, .invoke('val')
    .then(price => {
        const price_d = price;
       cy.log(price_d);
       cy.get('#FormRow-BUY-total').invoke('val').should('contain',(price*amount))
   
      
    })
  
    cy.get('#trade-orderForm-a-BUYlogin').click()
    cy.url().should('contains', '/login')
   
    })
})