//Application Window Component Constructor
function Manejador() {
	//load component dependencies
	var SecondView = require('ui/common/SecondView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	var b = Titanium.UI.createButton({title:'Back'});
    self.leftNavButton = b;
    b.addEventListener('click', function()
    {
    	alert('I was clicked');
    	self.close();
    });
		
		
		
		
		
		
	//construct UI
	var SecondView = new SecondView();
	self.add(SecondView);
	
	return self;
}

//make constructor function the public component interface
module.exports = Manejador;
