parseScripts is copyright (c) James Padolsey
(http://james.padolsey.com)

'parseScripts' is a simple abstraction you can
use the simplify the process of enhancing JavaScript
syntax as you so desire.

To use it, markup your custom content/code in a
SCRIPT element; make sure to give it a custom type
attribute, e.g.

<script type="mycoolstuff">...</script>

Then, at the end of your document (or on doc.ready)
make a call to parseScripts in the following way:

parseScripts('mycoolstuff', function(unparsed){
    // Valid JavaScript must be returned
    doStuffToParseMyCustomLanguage();
    
    return parsed;
    
});


--
More info: ___