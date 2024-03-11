document.addEventListener('DOMContentLoaded', function() {

  console.log("content has load");
// Create a new script element for jQuery
  var jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  jqueryScript.onload = function() {
      // jQuery has been loaded, now you can add your script
      var script = document.createElement('script');
      script.src = 'https://cdn.logr-ingest.com/LogRocket.min.js';
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
  };
  // Get the head element and insert the jQuery script before any other scripts
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(jqueryScript, head.firstChild);

  window.LogRocket && window.LogRocket.init('ewqf2k/tese');
  });
