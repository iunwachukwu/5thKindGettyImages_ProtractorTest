/**
 * GettyImagesUserRegistration.js
 */
describe('GettyImages Register New User', function() {
	
	// Edit user firstName, lastName, and email before running this test: new user is required to create a new account.
	
	var obj = require("./GettyImagesUserRegistrationPageObjects.js");
	var ptor;
	
	beforeEach(function() {
		obj.getURL();
//	    ptor = protractor.getInstance();
//	    ptor.waitForAngular();
	});
	
	
	it('Register a new user account', function() {
		
		obj.signinHomeButton.click();
		
		obj.registerButton.click();
		
		obj.firstName.sendKeys("Malon").click();
		
		obj.lastName.sendKeys("Brady").click();
		
		obj.orgType.click();
		
		obj.orgName.click();
		
		obj.jobTitle.click();
		
		obj.email.sendKeys("mbrady@brady.com");
		
		obj.phone.sendKeys("818-435-2514");
		
		obj.password.sendKeys("password1");
		
		obj.registerButton.click().then(function() {
			browser.sleep(5000)
		});
	})
	
	afterEach(function() {
		console.log("Test is completed");
		browser.restart();
	});
})
