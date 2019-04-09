const personalInformation = {
 name: 'Joanna',
 surname: 'Margielewska',
 email: 'joansue103@gmail.com',
 filedOfStudy: 'Applied Informatics'

}
function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.beep(1);
    document.getElementById('name').innerHTML = personalInformation.name;

}

function deviceInfo() {

	info =  'Hi, My name is Joanna Margielewska' ;

	navigator.notification.alert(info);
	
}