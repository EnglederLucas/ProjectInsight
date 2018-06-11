var http = new XMLHttpRequest();


window.onload = function () {
    http.open("POST", "http://localhost:3000/test/1", true);
    
    var x = document.getElementById("a");
    x.addEventListener('click', function() { http.send("a"); }, false);
    
    x.innerHTML='Found you';
};