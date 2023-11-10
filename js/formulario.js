function enviarFormulario () {
    if (document.validar_formulario.nombre_f.value.length <= 4) {
        alert("Escriba un nombre válido");
        document.validar_formulario.nombre_f.focus();
        return;
    }

    if (document.validar_formulario.correo_f.value === "" || !validarCorreo(correo_f.value)) {
        alert("Escribe un correo electrónico válido");
        document.validar_formulario.correo_f.focus();
        return;
    }

    if (document.validar_formulario.desarrollo_f.value.length <= 80) {
        alert("Debes escribir un minimo 80 caracteres para participar");
        document.validar_formulario.desarrollo_f.focus();
        return;
    
    }

    if (!document.validar_formulario.acepto_f.checked) {
        alert("Debes aceptar los términos y condiciones para continuar");
        return;
    }



    alert("¡Gracias por participar!");
    document.validar_formulario.submit();

}

function validarCorreo(correo_f) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(correo_f);
}