var cookie = document.cookie;
var posicionNombre = cookie.indexOf('=');
var nombreCookie = '';

if (cookie.search(' ') != -1) {
    nombreCookie = cookie.substr(cookie.lastIndexOf(' ')).split('=')[0].trim();
} else {
    nombreCookie = cookie.substr(0, posicionNombre);
}

if (cookie != '') {
    document.getElementById("mensaje").innerHTML = nombreCookie + " registrado correctamente. Pruebe a Logearse.";
}

/********* LOGIN *********/
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('usuario').value;
    var contras = document.getElementById("contrasenia").value;
    
   
    if (getCookie(nombre) == contras) {
         setCookie('sesion', nombre);
        alert('Bienvenido de nuevo ' + nombre);
        
        var boton = document.getElementById("logout");
        boton.style.display = "block";
       
    } else {
        alert('Credenciales Incorrectas');
    }

});


function setCookie(cname, cvalue, exdays) {
    if (exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();

    } else expires = ' ';
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0 ; i < ca.length ; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function logoutSesion(cname) {
    document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
