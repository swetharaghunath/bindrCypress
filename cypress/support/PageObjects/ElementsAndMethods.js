import values from '../../fixtures/values.json'
import 'cypress-file-upload';

class ElementsAndMethods {

    navigateToBindr(url) {
        return cy.visit(url)
    }

    bindrLogs(logText) {
        return cy.log(logText)
    }

    bindrWelcome() {
        cy.get('.jss2 > h4').contains('Welcome!')
        cy.get('.jss2 > p').contains('To continue please log in below')
        cy.get(':nth-child(2) > .MuiFormLabel-root').contains('Email')
        cy.get(':nth-child(3) > .MuiFormLabel-root').contains('Password')
    }

    bindruserName(userName) {
        cy.get('[data-test="email"] > .MuiInputBase-root > .MuiInputBase-input')
            .type(userName)
    }

    bindrpwd(password) {
        cy.get('[data-test="password"] > .MuiInputBase-root > .MuiInputBase-input')
            .type(password)
    }
    bindrLoginButton(status) {
        cy.get('[data-test="login-btn"]').should(status)
    }
    bindrLoginButtonClick() {
        cy.get('[data-test="login-btn"]').click().log("Logged in successfully");
    }

    /***************************Dashboard*************************** */

    bindrDashboardElements(status){
        cy.get('[data-test="page-heading"]').contains('Enquiries').log("Enquires heading displayed")
        cy.get('.jss31').contains('Home').log("Home Link displayed")
        cy.get('[data-test="care-home-name"] > .MuiTypography-root').contains('All my homes').log("All my homes Link displayed")
        cy.get('.sc-crHmcD').log("Home Link arrow displayed")
        cy.get('[data-test="owner-name"]').contains('sudeshna bhattacharya').log("User Name displayed")// to change this
        cy.get('[data-test="avatarInitial"]').contains('sb').log("User initials displayed")
        cy.get('[data-test="main-list"] > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').should(status).log("Enquiries link displayed")
        cy.get('[data-test="secondary-list"] > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').should(status).log("Settings link displayed")
        cy.get('#date-filter > .MuiButton-label').log("Enquiry date header displayed")
        cy.get('#enquiry-filter-1 > .MuiButton-label').log("Status header displayed")
        cy.get('#enquiry-filter-2 > .MuiButton-label').log("Stage filter displayed")
        cy.get('#enquiry-filter-3 > .MuiButton-label').log("Residency Type filter displayed")
        cy.get('#enquiry-filter-4 > .MuiButton-label').log("Funding type filter displayed")
        cy.get('#enquiry-filter-4 > .MuiButton-label').log("Care type filter displayed")
        cy.get('[data-test="admin-enquiriesTable-enquiryDate"]').contains('Enquiry date').log("Enquiry Date table header displayed")
        cy.get('[data-test="admin-enquiriesTable-careHome"]').contains('Home').log("Home header displayed")
        cy.get('[data-test="admin-enquiriesTable-contact"]').contains('Main contact').log("Status table header displayed")
        cy.get('[data-test="admin-enquiriesTable-prospectName"]').contains('Prospect name').log("Temperature table header displayed")
        cy.get('[data-test="admin-enquiriesTable-status"]').contains('Status').log("Stage table header displayed")
        cy.get('[data-test="admin-enquiriesTable-lastContacted"]').contains('Last contacted').log("Last contacted table header displayed")
        cy.get('[data-test="admin-enquiriesTable-residencyType"]').contains('Residency type').log("Residency type table header displayed")
        cy.get('[data-test="admin-enquiriesTable-fundingType"]').contains('Funding type').log("Funding type table header displayed")
        cy.get('[data-test="admin-enquiriesTable-careType"]').contains('Care type').log("Care type table header displayed")
        cy.get('[data-test="admin-enquiriesTable-enquiryOwner"]').contains('Enquiry owner').log("Enquiry owner table header displayed")

    }

    bindrCreateEnquiryButton(){
        cy.wait(1000)
        cy.get('.jss54 > .MuiButtonBase-root').contains('Create enquiry').click().log("Create Enquiry button pressed")
    }

    bindrMainContactDetailsCheck(){
        cy.wait(2000)
        cy.get('.sc-fKVqWL').contains('Create enquiry').log("Create enquiry header is available")
        cy.get('MuiTypography-root MuiTypography-h2').should('have.text', 'Main contact details').log("Main contact details Text visible ")
        cy.get('.jss87 > :nth-child(2) > .MuiFormLabel-root').contains("Title").log("Title text visible")
        cy.get('[data-test="titleId"] > .MuiFormControl-root > .MuiInputBase-root').log("dropdown visible")
        cy.get('.jss87 > :nth-child(3) > .MuiFormLabel-root').contains("First name").log("First name input header")
        cy.get('.jss87 > :nth-child(4) > .MuiFormLabel-root').contains("Last name").log("Last name input header")
        cy.get('.jss95 > .MuiFormLabel-root').contains("Preferred contact method").log("Preferred contact method header")
        cy.get('#contact-0').log("contact method dropdown")
        cy.get('.jss90 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').log("enter email ")
        cy.get('[data-test="add-another-contact"]').log("add another contact method")
        cy.get('.sc-bBHxTw > .MuiBox-root > .MuiButtonBase-root').log("Cancel button")
        cy.get('[data-test="submit-btn"]').log("Create enquiry")
        cy.get(':nth-child(6) > .MuiFormLabel-root').contains("Relationship to prospect").log("Relationship to prospect")
        cy.get('[data-test="relationshipToProspectId"] > .MuiFormControl-root > .MuiInputBase-root').log("relationship dropdown")
        cy.get(':nth-child(7) > .MuiFormLabel-root').contains("Power of attorney")
        cy.get('[data-test="powerOfAttorneyId"] > .MuiFormControl-root > .MuiInputBase-root').log("power of attorney dropdown")
   }

   bindrAssociateEnquiryCheck(){

    cy.get('.jss71').contains("Associate enquiry with").log("Associate enquiry with")
    cy.get(':nth-child(9) > .MuiFormLabel-root').contains("Enquiry method").log("Enquiry method")
    cy.get('[data-test="methodId"] > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry method dropdown")
    cy.get(':nth-child(10) > .MuiFormLabel-root').log("Enquiry Source")
    cy.get('[data-test="methodId"] > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry Source dropdown")
    cy.get(':nth-child(10) > .MuiFormLabel-root').log("Expected admission timescale")
    cy.get('[data-test="sourceId"] > .MuiFormControl-root > .MuiInputBase-root').log("Expected admission timescale dropdown")
    cy.get(':nth-child(11) > .MuiFormLabel-root').log("Initial Enquiry date")
    cy.get(':nth-child(11) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Initial Enquiry date calendar")
    cy.get(':nth-child(12) > .MuiFormLabel-root').log("Enquiry Stage")
    cy.get('.react-datepicker__input-container > input').log("Enquiry date")
    cy.get('.react-datepicker__input-container > input').log("Enquiry date fill")
    cy.get('.react-datepicker__input-container > input').log("Enquiry source dropdown")
    cy.get(':nth-child(14) > .MuiFormLabel-root').log("Enquiry date")
    cy.get('[data-test="careHomeId"] > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry date fill")
    cy.get(':nth-child(15) > .MuiFormLabel-root').log("Enquiry method")
    cy.get('[data-test="ownerId"] > .sc-fFeiMQ > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry method")
   }

   bindrProspect(){
    cy.get('[data-test="prospect-accordion"] > .MuiAccordionSummary-root').log("Prospect Header")
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiFormLabel-root').contains("Title").log("Prospect title")
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(2) > .MuiFormLabel-root').contains("First name").log("First name")
    cy.get('.MuiAccordionDetails-root > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(3) > .MuiFormLabel-root').contains("Last name").log("Last name")
    cy.get('.MuiAccordionDetails-root > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(4) > .MuiFormLabel-root').contains("Age").log("Age")
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(5) > .MuiFormLabel-root').contains("Current residence").log("Current residence")
    cy.get('#prospect-content > .MuiAccordionDetails-root > :nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    
   }

   bindrCareDetails(){
    cy.get('[data-test="careDetails-accordion"] > .MuiAccordionSummary-root').log("Care details")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiFormLabel-root').contains("Residency type").log("Residency type")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Residency type dropdown")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(2) > .MuiFormLabel-root').log("Care type")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("care type dropdown")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(3) > .MuiFormLabel-root').contains("Reason for seeking care").log("Reason for seeking care")
    cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Reason for seeking care")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(4) > .MuiFormLabel-root').contains("Mobility aid").log("Mobility aid")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Mobility aid")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(5) > .MuiFormLabel-root').contains("Dependency level").log("Dependency Level")
    cy.get('#careDetails-content > .MuiAccordionDetails-root > :nth-child(5) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Dependency Level")
   }

   bindrFinancialAssesment(){
    cy.get('[data-test="financialAssessment-accordion"] > .MuiAccordionSummary-root > .MuiAccordionSummary-content').contains("Financial assesment").log("Financial assesment heading")
    cy.get('#financialAssessment-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiFormLabel-root').contains("Funding type").log("Funding type header")
    cy.get('#financialAssessment-content > .MuiAccordionDetails-root > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("Funding type inputbox")
    cy.get('#financialAssessment-content > .MuiAccordionDetails-root > :nth-child(2) > .MuiFormLabel-root').contains("Residency type").log("Residency type").log("property ownership header")
    cy.get('#financialAssessment-content > .MuiAccordionDetails-root > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').log("property ownership inputbox")

}

   bindrCreateEnquiryHappyPath()
   {
    cy.exec('npm cache clear --force')
    cy.wait(10000)
    cy.get('[data-test=titleId] > div > div').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('input[name="firstName"]').type("Swetha");
    cy.get('input[name="lastName"]').type("test");
    cy.get('#contact-0').contains('Email')
    cy.get('input[name="email"]').type("swethatest@yopmail.com");
    cy.get('input[name="relationshipToProspectId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('input[name="powerOfAttorneyId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();

    cy.get('input[name="methodId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('input[name="sourceId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('input[name="admissionTimescaleId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('input[name="admissionTimescaleId"]').click();
    cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
    cy.get('[data-test="careHomeId"] > .MuiFormControl-root > .MuiInputBase-root').first().click();
   /// var today = new Date();
   // cy.get('input[name="initialDate"]').contains(today)


   cy.get('[data-test="prospect-accordion"] > .MuiAccordionSummary-root').click()
   cy.get('input[name="prospectTitleId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="prospectFirstName"]').type("Swetha");
   cy.get('input[name="prospectLastName"]').type("Test");
   cy.get('input[name="prospectAge"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="prospectCurrentResidenceId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
  //
   // 

   
   cy.get('[data-test="careDetails-accordion"] > .MuiAccordionSummary-root').click()
   cy.get('input[name="residencyTypeId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="careTypeId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="seekingCareId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="mobilityAidId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="dependencyLevelId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   
   cy.get('[data-test="financialAssessment-accordion"] > .MuiAccordionSummary-root').click()
   cy.get('input[name="fundingTypeId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   cy.get('input[name="propertyOwnershipId"]').click();
   cy.get('.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option').first().click();
   
   cy.get('[data-test="submit-btn"]').click().log("Create enquiry happy path")

}
bindrCreatedEnquiryTableCheck(){
cy.wait(10000)
cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('04-01-2022').log("Enquiry date is available for added Enquiry");
cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Lyncroft Care Home').log("Home is available for added Enquiry");
cy.get(':nth-child(2) > :nth-child(3) > [data-test="contact-name"] > p').contains('Swetha test').log("main contact is available for added Enquiry");
cy.get('tbody > :nth-child(2) > :nth-child(4)').contains('Swetha Test').log("Prospect name is available for added Enquiry");
cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('Active').log("Status is available for added Enquiry");
cy.get('[data-test="temperature_id"]').contains('hot').log("Temperature is available for added Enquiry");
cy.get('[data-test="stage_id"]').contains('New enquiry').log("Temperature is available for added Enquiry");
cy.get('tbody > :nth-child(1) > :nth-child(9)').contains('Permanent').log("Residency type is available for added Enquiry");
cy.get('tbody > :nth-child(1) > :nth-child(11)').contains('Residential').log("Care type is available for added Enquiry");
cy.get('tbody > :nth-child(1) > :nth-child(12)').contains('sudeshna bhattacharya').log("Enquiry owner is available for added Enquiry");
}

bindrAddContact(){

}
bindrEmailLogEmail(){
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('[data-test="log-button"]').click();
    cy.get('[data-test="contact-list"] > .MuiFormControl-root > .MuiInputBase-root') 
  //  cy.get('.react-datepicker__input-container > input')
    cy.get('.MuiInputBase-root').click()
    cy.wait(3000)
    cy.get('.editorTextBox').type("Test");
    cy.get('[title="Bold"] > img').click()
    cy.get('[title="Italic"] > img').click()
    cy.get('[title="Underline"] > img').click()
    cy.get('[data-test="cancel-button"] > .MuiButton-label').click()
    
}

bindrSendemail(){
    cy.get('span[class="MuiTab-wrapper"] ').contains("Emails").click().log("Send email button check");
    cy.get('span[class="MuiButton-label"] ').contains("Log email").should('not.be.disabled').log("Connect outlook button cehck");
    cy.get('span[class="MuiButton-label"] ').contains("Send email").should('not.be.disabled').log("Connect outlook button cehck");

    cy.wait(3000)
}

bindrCalls(){
    cy.get('span[class="MuiTab-wrapper"] ').contains("Calls").click();
    cy.wait(3000) 
    cy.get('[data-test="log-call-button"]').click()
    cy.get('span[class="MuiButton-label"] ').contains("Cancel").click()
} 

bindrDocuments(){
    cy.get('span[class="MuiTab-wrapper"] ').contains("Documents").click();
    cy.get('.MuiButton-label').contains("Upload file").click()
    //cy.get('[data-test="upload-file-button"]').click()
    cy.get('[data-test="upload-file-button"]').click();
}
bindrNotes(){
    cy.get('span[class="MuiTab-wrapper"] ').contains("Notes").click();
    cy.wait(3000);
    cy.get('.MuiButton-label').contains("Create note").click({force: true});
    cy.get('.editorTextBox').type('test');
    cy.get('span[class="MuiButton-label"] ').contains("Save").click({force: true});
}
bindrEnquiryDetails(){
    cy.get('#panel-header-enquiryOverview').click();
    cy.get('[data-test="methodId"] > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry method is present");
    cy.get('[data-test="sourceId"] > .MuiFormControl-root > .MuiInputBase-root').log("Enquiry Source is present");
    cy.get('[data-test="temperatureId"]').log("Temperature is present");
    cy.get('[data-test="careHomeId"] > .MuiFormControl-root > .MuiInputBase-root').log("Care home is present ");
    cy.get('[data-test="ownerId"] > ').log("Enquiry owner is present");
  //  cy.get('[data-test="stage_id"] > ').log("Enquiry owner is present");
    cy.get('.react-datepicker__input-container > input').log("Initial enquiry date present")

}
bindrContacts(){
    cy.get('#panel-header-contacts').click()
    cy.get('[data-test="add-contact-link"]').click()
    cy.get('[data-test="titleId"] > .MuiFormControl-root > .MuiInputBase-root').log("Title present ")
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').log("FirstName present")
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').log("last name present")
    cy.get('#contact-0').log("contact method present")
    cy.get('[data-test="relationshipToProspectId"] > .MuiFormControl-root > .MuiInputBase-root').log("Relationship to prospect present")
    cy.get('[data-test="powerOfAttorneyId"] > .MuiFormControl-root > .MuiInputBase-root').log("power of attorney id is present")
    cy.get('[data-test="submit-btn"]').should('not.be.disabled')
    cy.get('span[class="MuiButton-label"] ').contains("Cancel").should('not.be.disabled').click();


}
bindrProspect(){
    cy.get('#panel-header-prospect').click().log("Prospect header verified");
    cy.get('input[name="titleId"]').log("Verifying title id field present");
    cy.get('input[name="firstName"]').log("Verifying firstName field present");
    cy.get('input[name="lastName"]').log("Verifying lastName id field present");
    cy.get('input[name="email"]').log("Verifying email field present");
    cy.get('input[name="age"]').log("Verifying age field present");
    cy.get('input[name="currentResidenceId"]').log("Verifying currentresidence field present");
    cy.get('input[name="titleId"]').log("Verifying title id field present");
    //cy.get('.label').contains('National Insurance number').log("National insurance number is present");
}
bindrCareDetails(){
    cy.get('#panel-header-careDetails').click()
    cy.get('input[name="residencyTypeId"]').log("Verifying residencyType field present");
    cy.get('input[name="careTypeId"]').log("Verifying careTypeId field present");
    cy.get('input[name="seekingCareId"]').log("Verifying seekingCareId field present");
    cy.get('input[name="mobilityAidId"]').log("Verifying mobilityAidId field present");
    cy.get('input[name="dependencyLevelId"]').log("Verifying dependencyLevelId field present");
  //  cy.get('.label').contains('NHS number').log("National insurance number is present");
}

bindrCareAssessment(){
cy.get('#panel-header-careAssessment').click()
cy.get('input[name="preferredRoomId"]').log("preferredRoomId field present");
cy.get('[data-test="isCareAssessmentCompleted"]').log("care assessment radio buttons present");

}
bindrFinancialAsessment(){
    cy.get('#panel-header-financialAssessment').click();
    cy.get('input[name="fundingTypeId"]').log("fundingTypeId field present");
    cy.get('input[name="propertyOwnershipId"]').log("propertyOwnershipId field present");
    cy.get('input[name="hasProofOfFunding"]').log("hasProofOfFunding field present");


}

bindrLegalAssessment(){
    cy.get('#panel-header-legalAssessment').click().log("legal assessment field present");

}

bindrAdmissionDetails(){
    cy.get('#panel-header-admissionDetails').click().log("Admission details");
    cy.get('input[name="agreedAdmissionDate"]').log("hasProofOfFunding field present");
    cy.get('input[name="agreedAdmissionTime"]').log("hasProofOfFunding field present");
    cy.get('[data-test="hasADepositBeenMade"]').log("deposit pais field present");
    
}

bindrEnquiryClosure(){
    cy.get('#panel-header-enquiryClosure').click().log("Enquiry closure");
    cy.get('input[name="closureDate"]').log("closureDate");
    cy.get('input[name="closureReasonId"]').log("closureReasonId");    
}
bindrSettings(){
    cy.get('[data-test="secondary-list"] > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click().log("Settings checks");
    cy.get('[data-test="username"]').should('have.text', 'sudeshna bhattacharya').log("userName is available in bindr")
    cy.get('input[name="firstName"]').log("firstName-In settings");
    cy.get('input[name="lastName"]').log("last name in settings");
    cy.get('[data-test="userEmail"]').log("useremail in settings");
    cy.get('[data-test="change-password"]').log("Password in settings");
}
bindrHome(){
    cy.get('[data-test="care-home-name"]').log("All home dropdown");
    cy.get('span[class="MuiIconButton-label"] >  ')
}
bindrSearch(){
    cy.get('[data-test="main-list"] > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click();
    cy.get('[data-test="search-input"] > .MuiInputBase-root > .MuiInputBase-input').click().type("Swetha test");
}

}

export default ElementsAndMethods;