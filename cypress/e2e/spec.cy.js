describe('Test', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('BtnLogin', () => {
    cy.contains('Customer Login').click()
  })

  it('SelecUser', () => {
    cy.get('.form-control.ng-pristine.ng-untouched.ng-valid', {timeout: 7000}).click()
  })

  it('User', () => {
    cy.get('[value="1"]', {timeout: 7000}).click()
  })

  it('Login', () => {
    cy.get('.btn.btn-default', {timeout: 7000}).click()
  })

  it('BtnHome', () => {
    cy.get('.btn.home').click()
  })

  it('BtnBankManager', () => {
  cy.contains("Bank Manager Login").click()
  })

  it('BtnAddCustomer', () => {
    cy.get('[ng-class="btnClass1"]', {timeout: 7000}).click()
    
  })

  it('TextCustomer', () => {
    cy.get('[placeholder="First Name"]', {timeout: 7000}).type('Pedro')
    cy.get('[placeholder="Last Name"]', {timeout: 7000}).type('Rojas')
    cy.get('[placeholder="Post Code"]', {timeout: 7000}).type('123')
  
  })

  it('BtnAddCustomer', () => {
    cy.get('.btn.btn-default', {timeout: 7000}).click()
    
  })

  it('BtnOpenCustomer', () => {
    cy.get('.btn.btn-lg.tab.btn-primary', {timeout: 7000}).click()
    
  })

  it('CustomerName', () => {
    cy.get('#userSelect', {timeout: 7000}).click()
    
  })

  it('SelectCustomer', () => {
    cy.get('[value="1"]', {timeout: 7000}).click()
  })

  it('Currency', () => {
    cy.get('#currency', {timeout: 7000}).click()
    
  })

  it('SelectCurrency', () => {
    cy.get('[value="Dollar"]', {timeout: 7000}).click()
  })

  it('BtnProcess', () => {
    cy.get('[type="submit"]', {timeout: 7000}).click()
  })

  it('BtnCustomer', () => {
    cy.get('.btn.btn-lg.tab.btn-primary', {timeout: 7000}).click()
  })

  it('TextSearchCustomer', () => {
    cy.get('[placeholder="Search Customer"]', {timeout: 7000}).type('Harry')
  })
 
  it('BtnDelete', () => {
    cy.get('[ng-click="deleteCust(cust)"]', {timeout: 7000}).click()
  })

  it('BtnHome', () => {
    cy.get('.btn.home').click()
  })
})

