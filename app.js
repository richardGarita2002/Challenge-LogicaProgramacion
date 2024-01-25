function encriptarMensaje() {
    var mensaje = document.getElementById('mensaje').value;

    if (mensaje.trim() !== '') {
        mensaje = mensaje.replace(/e/g, 'enter');
        mensaje = mensaje.replace(/i/g, 'imes');
        mensaje = mensaje.replace(/a/g, 'ai');
        mensaje = mensaje.replace(/o/g, 'ober');
        mensaje = mensaje.replace(/u/g, 'ufat');
    }

    mostrarMensaje(mensaje);
}

function desencriptarMensaje() {
    var mensaje = document.getElementById('mensaje').value;

    if (mensaje.trim() !== '') {
        // Reemplazar cada código con su letra original
        mensaje = mensaje.replace(/enter/g, 'e');
        mensaje = mensaje.replace(/imes/g, 'i');
        mensaje = mensaje.replace(/ai/g, 'a');
        mensaje = mensaje.replace(/ober/g, 'o');
        mensaje = mensaje.replace(/ufat/g, 'u');
    }

    mostrarMensaje(mensaje);
}

function mostrarMensaje(mensaje){

    if(mensaje.trim() === '') {
        document.getElementsByClassName('contenedor-generado')[0].innerHTML =
        "<div class='texto-defecto'>" +
        "<img class='muñeco' src='imagenes/Muñeco.png'/>" +
        "<h3>Ningún mensaje fue encontrado</h3>" +
        "<p>Ingresa el texto que desees encriptar o descencriptar.</p></div>";
    } else {
        document.getElementsByClassName('contenedor-generado')[0].innerHTML ="<p class='texto-generado'>" + mensaje + "</p>";
    }
}