var http = new XMLHttpRequest();


window.onload = function () {
    http.open("POST", window.location.href, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    

    var a = document.getElementById("a");
    a.addEventListener('click', function() { 
        http.send("answer=a"); 
        a.style.background='#000000';
    }, false);
    
    var b = document.getElementById("b");
    b.addEventListener('click', function() { 
        http.send("answer=b"); 
        b.style.background='#000000';
    }, false);

    var c = document.getElementById("c");
    c.addEventListener('click', function() { 
        http.send("answer=c"); 
        c.style.background='#000000';
    }, false);

    var d = document.getElementById("d");
    d.addEventListener('click', function() { 
        http.send("answer=d"); 
        d.style.background='#000000';
    }, false);
};