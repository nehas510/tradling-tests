describe("Tradling Assignment", () => {
    it("Validate it redirects to Markets", () => {

    cy.visit("https://www.binance.com/en");

    cy.get('.gBOGuU > .sc-bwzfXH').contains('View more markets').click()
    
    })
    it("Validate that clicking on ETH redirects to Pair trading view and shows trading chart ", () => {
    cy.get('.ReactVirtualized__Table__row').contains("ETH").click()

    cy.get('.sc-1t2bpae-8').should('be.visible')
    })
    it("Validate that clicking on 'limit' shows the span having the field TOTAL", () => {

    cy.get('#TabbedOrderFormsMargin-a-exchangeLimit').click()
    cy.get('.sc-1lt5gnu-0').should('contain.text','Total')
    })
    it("Validate that clicking on 'market' shows the span not having the field TOTAL", () => {

    cy.get('#TabbedOrderFormsMargin-a-exchangeMarket').click()
    cy.get('.sc-1lt5gnu-0').should('not.contain.text','Total')
    })

    it("Validate that clicking on 'dropdown' shows the list", () => {

      cy.get('.sc-1n3jmzh-5 > [data-name="oco"] > :nth-child(1)').click()
      cy.get('.bnc-dropdown-menu').should('be.visible')
    })
})
    