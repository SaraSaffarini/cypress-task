import * as logInHelpers from './logInHelpers'

beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    cy.get('.page-heading').contains('Authentication')
})

//CREATE AN ACCOUNT FEILD

//creating an account using a valid email address.
it('Create an account using a valid email', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.createAccountHeader, logInHelpers.LOCATORS.createAccountHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.emailCreateBtn, 's11819108@stu.najah.edu')
    logInHelpers.createAccountBtn()
})

//creating an account using an in-valid email address.
it('Create an account using an in-valid email', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.createAccountHeader, logInHelpers.LOCATORS.createAccountHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.emailCreateBtn, 's1')
    logInHelpers.createAccountBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError,'Invalid email address.')
})

//creating an account using an already existing email address.
it('Create an account using an already existing email', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.createAccountHeader, logInHelpers.LOCATORS.createAccountHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.emailCreateBtn, 'sarasaffarini.35@gmail.com')
    logInHelpers.createAccountBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError,'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
})

//creating an account while leaving the email address field blank.**
it('Create an account with blank email field', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.createAccountHeader, logInHelpers.LOCATORS.createAccountHeaderValue)
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError,'Invalid email address.')
})

//LOG IN FEILD

//Log in using a valid email and valid password
it('Log in using a valid email and valid password', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInEmail, 'sarasaffarini.35@gmail.com')
    logInHelpers.insertText(logInHelpers.LOCATORS.logInPassword, 'sara289289')
    logInHelpers.logInBtn()
})

//Log in using a valid email and in-valid password
it('Log in using a valid email and in-valid password', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInEmail, 'sarasaffarini.35@gmail.com')
    logInHelpers.insertText(logInHelpers.LOCATORS.logInPassword, 's')
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'Invalid password.')
})

//Log in using an in-valid email and a valid password
it('Log in using an in-valid email and valid password', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInEmail, 's')
    logInHelpers.insertText(logInHelpers.LOCATORS.logInPassword, 'sara289289')
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'Invalid email address.')
})

//Log in using an in-valid email and an in-valid password
it('Log in using an in-valid email and an in-valid password', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInEmail, 's')
    logInHelpers.insertText(logInHelpers.LOCATORS.logInPassword, 's')
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'Invalid email address.')
})

//Log in while leaving both the email and password feilds empty
it('Log in while leaving both the email and password feilds empty', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'An email address required.')
})

//Log in while leaving only the email feild empty 
it('Log in while leaving the email feild empty', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInPassword, 'sara289289')
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'An email address required.')
})

//Log in while leaving only the password feild empty 
it('Log in while leaving the password feild empty', () => {
    logInHelpers.verifyArea(logInHelpers.LOCATORS.logInHeader, logInHelpers.LOCATORS.logInHeaderValue)
    logInHelpers.insertText(logInHelpers.LOCATORS.logInEmail, 'sarasaffarini.35@gmail.com',)
    logInHelpers.logInBtn()
    logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError,'Password is required.')
})

//Forget password button 
it('Click on forget password button', () => {
   cy.get('.lost_password > a').click()
})