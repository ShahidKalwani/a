       
// Ensure that the LogRocket initialization code runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
         // Create a new script element for LogRocket
    var logRocketScript = document.createElement('script');
    logRocketScript.src = 'https://cdn.logr-ingest.com/LogRocket.min.js';
    logRocketScript.onload = function() {
        // LogRocket has been loaded, now you can add jQuery and other scripts
        var jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jqueryScript.onload = function() {
            // jQuery has been loaded, now you can add other scripts
            console.log("jQuery loaded");
        };

        // Get the head element
        var head = document.getElementsByTagName('head')[0];
        // Insert the jQuery script after the LogRocket script
        head.appendChild(jqueryScript);

        // LogRocket initialization code
        window.LogRocket && window.LogRocket.init('ewqf2k/tese');
    };

    // Get the head element
    var head = document.getElementsByTagName('head')[0];
    // Insert the LogRocket script at the beginning of the head
    head.insertBefore(logRocketScript, head.firstChild);

});

