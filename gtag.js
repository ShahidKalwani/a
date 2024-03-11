
// Create a new script element
var script = document.createElement('script');

// Set the source attribute to the URL of the script
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M9D0VQD45E"';

// Set the async attribute to true
script.async = true;

// Append the script element to the document's head or body
document.head.appendChild(script)


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M9D0VQD45E');
