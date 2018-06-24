/**
 * GettyUserRegistrationNoPgeObj.js is work-around provided for User Account creation because of the following Error in the PageObjects version:
 * 
 * Error: Error while waiting for Protractor to sync with the page: "both angularJS testability and angular testability are undefined.  
 * This could be either because this is a non-angular page or because your test involves client-side navigation, 
 * which can interfere with Protractor's bootstrapping.
 */
describe('GettyUserRegistrationNoPgeObj.js will create a new user account.', function() {
	
	// Edit user firstName, lastName, and email before running this test: new user is required to create a new account.
	
	it('Open GettyImages website', function() {
		
		browser.get('https://www.gettyimages.com/');
		
		element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)")).click();
		
		element(by.css("section[class='option-picker']")).element(by.css("section:nth-child(2)")).click();
		
		element(by.model("register['firstName']")).sendKeys("Brad").click();
		
		element(by.model("register['lastName']")).sendKeys("Kanes").click();
		
		element(by.name("register[organization_type]")).element(by.css("Optgroup[label='Agencies']")).element(by.css("option:nth-child(4)")).click();
		
		element(by.model("register['organizationName']")).sendKeys("Pizza Hut").click();
		
		element(by.name("register[job_title]")).element(by.css("Optgroup[label='Client Management']")).element(by.css("option:nth-child(3)")).click();
		
		element(by.name("register[email]")).sendKeys("bkanes@kanes.com");
		
		element(by.name("register[telephone]")).sendKeys("818-435-2514");
		
		element(by.name("register[password]")).sendKeys("password1");
		
		element(by.id("register-button")).click().then(function() {
			browser.sleep(5000)
		});

	})
	
	
})
