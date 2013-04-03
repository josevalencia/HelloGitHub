//Application Window Component Constructor
function ManejadorExplain() {
	//load component dependencies
	var Explain = require('ui/common/Explain');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var Explain = new Explain();
	self.add(Explain);
	
	return self;
}

//make constructor function the public component interface
module.exports = ManejadorExplain;
