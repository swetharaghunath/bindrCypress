import ElementsAndMethods from '../../support/PageObjects/ElementsAndMethods'
import values from '../../fixtures/values.json'

describe("Login testcases for bindr- Test for enquiry", function () {

before(function(){
    cy.fixture('values').then(function(testData){
        this.testData = testData
    })

})
it("Login with valid credentials - Test for enquiry starts", function(){
    
    const elements =new ElementsAndMethods();
    elements.navigateToBindr(this.testData.bindrURL_staging);
    elements.bindrWelcome();
    elements.bindruserName(this.testData.username);
    elements.bindrpwd(this.testData.password);
    elements.bindrLoginButtonClick();
    elements.bindrCreateEnquiryButton();
    elements.bindrCreateEnquiryHappyPath();
})
it("Check the settings ", function(){
    const elements =new ElementsAndMethods();
    elements.bindrSettings();
})

it("Check the Enquiry search",function(){
    const elements = new ElementsAndMethods();
    elements.bindrSearch();
})
})