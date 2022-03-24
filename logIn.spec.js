import * as logInHelpers from './logInHelpers'

const validEmail = 's11819108@stu.najah.edu'
const validLoginEmail = 'sarasaffarini.35@gmail.com'
const invalidEmail = 's1'
const existingEmail = 'sarasaffarini.35@gmail.com'
const validPassword = 'sara289289'
const invalidPassword = 's'
const blankEmail = '{ALT}'
const blankPassword = '{Alt}'
const invalidEmailErrorMsg = 'Invalid email address.'
const invalidPasswordErrorMsg = 'Invalid password.'
const existingEmailErrorMsg = 'An account using this email address has already been registered. Please enter a valid password or request a new one. '
const requiredEmailErrorMsg = 'An email address required.'
const requiredPasswordErrorMsg = 'Password is required.'

context('LogIn Page', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('.page-heading').contains('Authentication')
    })

    //CREATE AN ACCOUNT FEILD

    it('Create an account using a valid email', () => {
        logInHelpers.createAccount(validEmail, true)
    })

    it('Create an account using an in-valid email', () => {
        logInHelpers.createAccount(invalidEmail, false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError, invalidEmailErrorMsg)
    })

    it('Create an account using an already existing email', () => {
        logInHelpers.createAccount(existingEmail,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError, existingEmailErrorMsg)
    })

    it('Create an account with blank email field', () => {
        logInHelpers.createAccount(blankEmail,false)
        logInHelpers.verifyArea(logInHelpers.LOCATORS.createAccountHeader, logInHelpers.LOCATORS.createAccountHeaderValue)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.createAccountError, invalidEmailErrorMsg)
    })

    //LOG IN FEILD

    it('Log in using a valid email and valid password', () => {
        logInHelpers.loginByEmail(validLoginEmail, validPassword, true)
    })

    it('Log in using a valid email and in-valid password', () => {
        logInHelpers.loginByEmail(validLoginEmail, invalidPassword, false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, invalidPasswordErrorMsg)
    })

    it('Log in using an in-valid email and valid password', () => {
        logInHelpers.loginByEmail(invalidEmail, validPassword,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, invalidEmailErrorMsg)
    })

    it('Log in using an in-valid email and an in-valid password', () => {
        logInHelpers.loginByEmail(invalidEmail, invalidPassword,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, invalidEmailErrorMsg)
    })

    it('Log in while leaving both the email and password feilds empty', () => {
        logInHelpers.loginByEmail(blankEmail, blankPassword,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, requiredEmailErrorMsg)
    })

    it('Log in while leaving the email feild empty', () => {
        logInHelpers.loginByEmail(blankEmail, validPassword,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, requiredEmailErrorMsg)
    })

    it('Log in while leaving the password feild empty', () => {
        logInHelpers.loginByEmail(validEmail, blankPassword,false)
        logInHelpers.verifyErrorMsg(logInHelpers.LOCATORS.logInError, requiredPasswordErrorMsg)
    })

    it('Click on forget password button', () => {
        cy.get('.lost_password > a').click()
    })
})