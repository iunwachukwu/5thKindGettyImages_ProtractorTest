/**
 * GettyImagesUserRegistrationPageObjects.js
 */
function register()
{
	this.signinHomeButton = element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)"));
	this.registerButton = element(by.css("section[class='option-picker']")).element(by.css("section:nth-child(2)"));
	this.firstName = element(by.model("register['firstName']"));
	this.lastName = element(by.model("register['lastName']"));
	this.orgType = element(by.name("register[organization_type]")).element(by.css("Optgroup[label='Agencies']")).element(by.css("option:nth-child(4)"));
	this.orgName = element(by.model("register['organizationName']")).sendKeys("Pizza Hut");
	this.jobTitle = element(by.name("register[job_title]")).element(by.css("Optgroup[label='Client Management']")).element(by.css("option:nth-child(3)"));
	this.email = element(by.name("register[email]"));
	this.phone = element(by.name("register[telephone]"));
	this.password = element(by.name("register[password]"));
	this.registerButton = element(by.id("register-button"));
	
	// Methods
	this.getURL = function()
	{
		browser.get('https://www.gettyimages.com/');
	};

};

module.exports = new register();
