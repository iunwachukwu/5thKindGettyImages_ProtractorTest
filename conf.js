/**
 * 5thKindGettyImages Project Configuration file
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['GettyImagesEditorialUserActions.js'],
//  specs: ['GettyUserRegistrationNoPgeObj.js'],
//  specs: ['GettyImagesUserRegistration.js'],
  
  onPrepare :function()
	{
		browser.driver.manage().window().maximize();
	}
};