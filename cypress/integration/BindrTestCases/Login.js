
import ElementsAndMethods from '../../support/PageObjects/ElementsAndMethods'
import values from '../../fixtures/values.json'

describe("Login testcases for bindr", function () {

before(function(){
    cy.fixture('values').then(function(testData){
        this.testData = testData
    })

})

it("Login with valid credentials", function(){
    const elements =new ElementsAndMethods()
    elements.navigateToBindr(this.testData.bindrURL_staging);
    elements.bindrLogs('Bindr-Log: Navigation to Bindr successful');
    elements.bindrWelcome();
    elements.bindrLoginButton('be.visible')
    elements.bindrLogs('Bindr-Log: Login button is visible');
    elements.bindrLoginButton('be.disabled')
    elements.bindrLogs('Bindr-Log: Login button is disabled');
    elements.bindruserName(this.testData.username);
    elements.bindrLogs('Bindr-Log: Username entered');
    elements.bindrpwd(this.testData.password)
    elements.bindrLogs('Bindr-Log: Password entered');
    elements.bindrLoginButton('not.be.disabled')
    elements.bindrLogs('Bindr-Log: Login Button is not disabled');
    elements.bindrLoginButtonClick()
    elements.bindrLogs('Bindr-Log: Login Button is clicked');

})
it("check for every element in the dashboard", function(){
    const elements = new ElementsAndMethods()
    elements.bindrDashboardElements(('be.visible'))
})


})