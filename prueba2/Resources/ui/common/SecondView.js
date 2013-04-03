function SecondView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({fullscreen: true, tabBarHidden : true});
	
	self.title = 'hola';
	
	self.addEventListener('touchmove', function(e) {
	    labelSV.text = String.format(e.x);
	});
	
	var label1 = Ti.UI.createLabel({
		text : 'GOPANGO',
		font: { fontSize: 24 },
		height:'auto',
		width:'auto',
		color:'#000000',
		top : 10
	});	
	self.add(label1);
	
	var labelSV = Ti.UI.createLabel({
		text : '',
		height:'auto',
		width:'auto',
		color:'#000000',
		top : 50
	});	
	self.add(labelSV);
	
	var boton = Ti.UI.createButton({
		title : 'Abrir web Gopango',
		top: 100
	});
	self.add(boton);
	
	boton.addEventListener('touchmove', function(e) {
	    boton.left = String.format(e.x);
	    boton.top = String.format(e.y);
	});
	
	var slider = Titanium.UI.createSlider({
	    top: 150,
	    min: 0,
	    max: 100,
	    width: '100%',
	    value: 50
    });
    self.add(slider);
    
	var label = Ti.UI.createLabel({
	    text: slider.value,
	    width: '100%',
	    height: 'auto',
	    top: 220,
	    left: 0,
	    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    self.add(label);
	
	slider.addEventListener('change', function(e) {
	    label.text = String.format("%3.1f", e.value);
	});
	
	
	file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "file.txt");        
	var blob = file.read();
	var readText = blob.text;
	
	var fich = Ti.UI.createLabel({
		text: readText,
		top: 270
	});	
	
	self.add(fich);

	boton.addEventListener('click', function(e) {
		var webview = Titanium.UI.createWebView({url:'http://www.gopango.es'});
	    var window = Titanium.UI.createWindow();
	    window.add(webview);
	    window.open({modal:true});
	});
	var algo = "¡Gopango Prueba App!";
	prueba(algo);
	
	// Create Picker
	
	/*var picker = Ti.UI.createPicker({
		top:350,
		width : 200,
		height : 200
	});
	
	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Bananas'});
	data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
	data[2]=Ti.UI.createPickerRow({title:'Mangos'});
	data[3]=Ti.UI.createPickerRow({title:'Grapes'});
	data[5]=Ti.UI.createPickerRow({title:'Pears'});
	data[6]=Ti.UI.createPickerRow({title:'Fruits'});
	
	picker.add(data);
	picker.selectionIndicator = true;
	
	self.add(picker);*/
	
	var botonSalir = Ti.UI.createButton({
		title: 'Salir',
		top : 400,
		width : 100,
		height : 100
	});
	self.add(botonSalir);
	
	botonSalir.addEventListener('click', function(e) {
		
	});

	return self;	
}

function prueba(uno){
	
	//alert(uno, 'Bienvenid@');
	
	 var dialog = Ti.UI.createAlertDialog({
	    cancel: 1,
	    buttonNames: ['Ok'],
	    message: uno,
	    title: 'Bienvenid@'
	  });
	  dialog.show();
}

module.exports = SecondView;