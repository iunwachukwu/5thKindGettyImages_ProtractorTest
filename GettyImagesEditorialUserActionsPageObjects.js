/**
 * GettyImagesEditorialUserActionsPageObjects.js
 */
function signin()
{
	// GettyImages Site User Sign in web elements
	this.signinHomeButton = element(by.css("div[class='ups-actions']")).element(by.css("div:nth-child(5)"));          
	this.username = element(by.id("new_session_username"));
	this.password = element(by.model("new_session['password']"));
	this.signin = element(by.id("sign_in"));
	
	// GettyImages Site Editorial User Activities web elements
	this.editorialLink = element(by.xpath('//div[2]/div/section[1]/nav/div[2]/a'));
	this.entertainmentLink = element(by.css("div[class='menu editorial active']")).element(by.css("a:nth-child(4)"));
	this.entertainmentPic = element(by.xpath('//div[1]/section/div/article[1]/a/figure'));
	this.filterLink = element(by.css("div[class='filter-and-summary']")).element(by.css("div:nth-child(1)"));
//	this.newestSort = element(by.css("fieldset[class='accordion sort open']")).element(by.css("div:nth-child(3)"));
	this.newestSort = element(by.xpath('//section[1]/fieldset/div[2]/label[1]'));
//	this.verticalOrientation = element(by.css("fieldset[class='accordion orientation open']")).element(by.css("div:nth-child(2)"));
	this.verticalOrientation = element(by.xpath('//section[2]/fieldset[1]/div[1]/label'));
	this.last24Hours = element(by.css("select[id='recency']")).element(by.css("option:nth-child(2)"));
	this.clearFilters = element(by.css("section[class='refinements-summary']")).element(by.css("a[class='clear-filters']"));
//	this.signOut = element(by.css("div[class='ups-menu-item ups-account']")).element(by.css("ul[class='ups-dropdown-content ups-account']")).element(by.css("a[class='sign-out']"));
	
	// Methods
	this.getURL = function()
	{
		browser.get('https://www.gettyimages.com/');
	};

};

module.exports = new signin();
