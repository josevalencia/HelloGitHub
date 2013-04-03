//Explain Component Constructor
function Explain() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({fullscreen: true});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		//text:String.format(L('welcome'),'Titanium'),
		text:'Welcome to Gopango',
		top: 250,
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	var image = Ti.UI.createImageView({
		image:'logo.jpg',
		top: 50,
		borderRadius : 55,
		width : 200,
		height : 200
	});
	self.add(image);
	
	var button = Ti.UI.createButton({
		title : "Entrar",
		top : 280
	});
	self.add(button);
	
	//Add behavior for UI
	button.addEventListener('click', function(e) {
		//alert(e.source.text);
		
		var Window3 = require('ui/common/Manejador');
		new Window3().open();

	});
	
	return self;
}

module.exports = Explain;