document.addEventListener('DOMContentLoaded', function() {

  console.log("content has load");
// Create a new script element for jQuery
  var jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://cdn.jsdelivr.net/npm/requirejs@2.3.6/require.min.js';
  jqueryScript.onload = function() {
      // jQuery has been loaded, now you can add your script
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/browserify@17.0.0/index.min.js';
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
  };



  });
