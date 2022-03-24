export const LOCATORS = {
    createAccountHeader: '#create-account_form > .page-subheading',
    createAccountHeaderValue: 'Create an account',
    createAccountError: '#create_account_error',
    createAccountEmail: '#email_create',
    createAccountBtn: '#SubmitCreate > span',
    logInHeader: '#login_form > .page-subheading',
    logInHeaderValue: 'Already registered?',
    logInEmail: '#email',
    logInPassword: '#passwd',
    logInBtn: '#SubmitLogin > span',
    logInError: '#center_column > :nth-child(2)',
}

//Making sure actions are taking place in the right area
export const verifyArea = ((locator, value) => {
    cy.get(locator).contains(value)
})

//Verifying that  error messages appear 
export const verifyErrorMsg = ((locator, values) => {
    cy.get(locator)
    cy.get('ol > li').contains(values)
})

//Insert text
export const insertText = ((locator, value) => {
    cy.get(locator).type(value)
})

//Login by email and password
export const loginByEmail = ((email, pwd, loginSuccess) => {
    verifyArea(LOCATORS.logInHeader, LOCATORS.logInHeaderValue)
    insertText(LOCATORS.logInEmail, email)
    insertText(LOCATORS.logInPassword, pwd)
    cy.get('#SubmitLogin > span').click()
    cy.wait(9000)
    if (loginSuccess == true)
        cy.get('.account > span').contains('Sara Saffarini')
    else
        cy.get('#center_column > :nth-child(2) > p')
})

//Create an account by email
export const createAccount = ((email, createAccountSuccess) => {
    verifyArea(LOCATORS.createAccountHeader, LOCATORS.createAccountHeaderValue)
    insertText(LOCATORS.createAccountEmail, email)
    cy.get('#SubmitCreate > span').click()
    cy.wait(9000)
    if (createAccountSuccess == true)
        cy.get(':nth-child(1) > .page-subheading').contains('Your personal information')
    else
        cy.get('#create_account_error')

})