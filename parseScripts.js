/*
 * parseScripts
 * (c) James Padolsey
 * http://james.padolsey.com
 *
 * Makes it easier to extend JavaScript as you see fit.
 * (uses custom type attributes in SCRIPT elements)
 * Please read README.text
 */

function parseScripts(scriptType, parseFn) {
    
    var scripts = document.getElementsByTagName('script'),
        sLength = scripts.length,
        execute = function(parsed) {
            // Execute parsed script in global context.
            var dScript = document.createElement('script');
            try {
                dScript.appendChild( document.createTextNode(parsed) );
                document.body.appendChild(dScript);
            } catch(e) {
                dScript.text = parsed;
                document.getElementsByTagName('head')[0].appendChild(dScript);
            }
            dScript.parentNode.removeChild(dScript);
        };
    
    while (sLength--) {
        // All script elements matching scriptType are passed to parseFn.
        var script = scripts[sLength],
            type = script.type,
            code = script.innerHTML;
        if (scriptType.test ? scriptType.test(type) : type === scriptType) {
            
            if (script.src) {
                var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
                xhr.open('GET', script.src, false);
                xhr.send(null);
                code = xhr.responseText;
                xhr = null;
            }
            execute(parseFn ? parseFn(code) : code);
        }
    }
    
}