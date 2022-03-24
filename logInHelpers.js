export const LOCATORS = {
    createAccountHeader: '#create-account_form > .page-subheading',
    createAccountHeaderValue: 'Create an account',
    createAccountError: '#create_account_error',
    emailCreateBtn:'#email_create',
    logInHeader: '#login_form > .page-subheading',
    logInHeaderValue: 'Already registered?',
    logInEmail:'#email',
    logInPassword:'#passwd',
    logInBtn:'#SubmitLogin > span',
    logInError:'#center_column > :nth-child(2)',
}

//Making sure actions are taking place in the right area
export const verifyArea = ((locator, value) => {
    cy.get(locator).contains(value)
})

//Verifying that  error messages appear 
export const verifyErrorMsg = ((locator,values) => {
    cy.get(locator)
    cy.wait(9000)
    cy.get('ol > li').contains(values)

    
})

//Insert text
export const insertText = ((locator,value) => {
    cy.get(locator).type(value)
})

//click create an account button
export const createAccountBtn = () => {
    cy.get('#SubmitCreate > span').click()
}
//click create an account button
export const logInBtn = () => {
    cy.get('#SubmitLogin > span').click()
}


