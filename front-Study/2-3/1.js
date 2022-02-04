var name = 'world!';
(function() {
    var name;
    if(typeof name === 'undefined') {
        name = 'jack';
        console.log('goodbye' + name);
    }
    else {
        console.log('hello' + name);
    }
}) ();