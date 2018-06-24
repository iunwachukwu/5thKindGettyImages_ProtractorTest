/**
 * GettyImagesEditorialUserActions.js
 */
describe('Protractor GettyImages user Editorial activities', function() {
	
	var obj = require("./GettyImagesEditorialUserActionsPageObjects.js");
	
	beforeEach(function() {
		obj.getURL();
	});
	
	it('GettyImages website User Sign in', function() {
		
		obj.signinHomeButton.click();
		
		obj.username.sendKeys("bkanes@kanes.com");
		
		obj.password.sendKeys("password1");
		
		obj.signin.click();
		
	})
	
	it('GettyImages website Editorial User Activities', function() {
		
		obj.editorialLink.click();
		
		obj.entertainmentLink.click();
		
		obj.entertainmentPic.click();
		
		obj.filterLink.click();
		
		obj.newestSort.click();
		
		obj.verticalOrientation.click();
		
		obj.last24Hours.click();
		
		obj.clearFilters.click().then(function() {
			browser.sleep(5000);
		})
			
//		obj.signOut.click().then(function() {
//			browser.sleep(5000);
//		})
		
	})
	
	afterEach(function() {
		console.log("Test is completed");
	});
})
