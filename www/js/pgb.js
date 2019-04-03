function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, My name is Joanna Margielewska :-)' + '\n' +
			'I am from Cracow' ; 

	navigator.notification.alert(info);
	
}