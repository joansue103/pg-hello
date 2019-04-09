function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
    var networkState = navigator.connection.type;
    document.getElementById('networl-information').innerHTML = networkState;

}

function onDeviceReady() {
	navigator.notification.beep(1);
}

