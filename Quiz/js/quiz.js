var http = new XMLHttpRequest();

var lastButton;
var answer;


window.onload = function () {
    http.open("POST", window.location.href, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    

    var a = document.getElementById("a");
    a.addEventListener('click', function() { 
        answer = "answer=a";
        if(lastButton != undefined)
            lastButton.style.background='#F05F40'
        
        a.style.background='#8f321d';
        lastButton = a;
    }, false);
    
    var b = document.getElementById("b");
    b.addEventListener('click', function() { 
        answer = "answer=b";
        
        if(lastButton != undefined)
            lastButton.style.background='#F05F40'

        b.style.background='#8f321d';
        lastButton = b;
    }, false);

    var c = document.getElementById("c");
    c.addEventListener('click', function() { 
        answer = "answer=c";
        
        if(lastButton != undefined)
            lastButton.style.background='#F05F40'

        c.style.background='#8f321d';
        lastButton = c;
    }, false);

    var d = document.getElementById("d");
    d.addEventListener('click', function() { 
        answer = "answer=d";
        
        if(lastButton != undefined)
            lastButton.style.background='#F05F40'

        d.style.background='#8f321d';
        lastButton = d;
    }, false);

    var btn = document.getElementById("but_next");
    btn.addEventListener('click', function() { 
        if(answer != undefined)
            http.send(answer);
    }, false);
};