function changeText(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var msg_gracias = document.getElementById("gracias");
    var genero = ""

    if(document.datos.selec_genero[0].checked){
        genero = "Sr. "
    }else if(document.datos.selec_genero[1].checked){
        genero = "Sra. "
    }
    

    msg_gracias.innerHTML = "Gracias " + genero + nombre.value + " " + apellido.value + " por el interés en nuestros seguros"
}
