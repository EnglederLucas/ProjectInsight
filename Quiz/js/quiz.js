var http = new XMLHttpRequest();


window.onload = function () {
    http.open("POST", window.location.href, true);
    
    

    var a = document.getElementById("a");
    a.addEventListener('click', function() { 
        http.send("a"); 
        a.style.background='#000000';
    }, false);
    
    var b = document.getElementById("b");
    b.addEventListener('click', function() { 
        http.send("b"); 
        b.style.background='#000000';
    }, false);

    var c = document.getElementById("c");
    c.addEventListener('click', function() { 
        http.send("b"); 
        c.style.background='#000000';
    }, false);

    var d = document.getElementById("d");
    d.addEventListener('click', function() { 
        http.send("b"); 
        d.style.background='#000000';
    }, false);
};