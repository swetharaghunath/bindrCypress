import ElementsAndMethods from '../../support/PageObjects/ElementsAndMethods'
import values from '../../fixtures/values.json'

describe("Login testcases for bindr- Test for enquiry", function () {

before(function(){
    cy.fixture('values').then(function(testData){
        this.testData = testData
})

})
it("Check all enquiry details", function(){
    
    const elements =new ElementsAndMethods();
    elements.navigateToBindr();
    elements.bindrWelcome();
    elements.bindruserName(this.testData.username);
    elements.bindrpwd(this.testData.password);
    elements.bindrLoginButtonClick();

   elements.bindrCreatedEnquiryTableCheck();
   elements.bindrEmailLogEmail();
   elements.bindrSendemail();
   elements.bindrCalls(); 
   elements.bindrDocuments();
   elements.bindrNotes();
   elements.bindrEnquiryDetails();
   elements.bindrContacts();
   elements.bindrProspect();
   elements.bindrCareDetails();
   elements.bindrCareAssessment();
   elements.bindrFinancialAsessment();
   elements.bindrLegalAssessment();
   elements.bindrAdmissionDetails();
   elements.bindrEnquiryClosure();
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