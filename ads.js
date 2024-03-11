document.addEventListener('DOMContentLoaded', function() {

  console.log("content has load");
// Create a new script element for jQuery
  var jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  jqueryScript.onload = function() {
      // jQuery has been loaded, now you can add your script
      var script = document.createElement('script');
      script.src = '//pl22760247.profitablegatecpm.com/82/9d/f9/829df9aacbd051de93b7a3aeb17aee1e.js';
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
  };
  // Get the head element and insert the jQuery script before any other scripts
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(jqueryScript, head.firstChild);
  });
