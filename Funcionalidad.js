function ventana(){
    document.getElementById("ventana").style.display="block"
}

function cerrar(){
    document.getElementById("ventana").style.display="none"
}

function enviarCorreo(insTextoComp) {
    var sEmail = "hola@sitioincreible.com.ar";
    if(sEmail != null) {
        var sLink = "mailto:" + escape(sEmail)
         + "?subject=" + escape("Requiero tus servicios")
         + "&body=" + insTextoComp;
        window.location.href = sLink;
    }
}

