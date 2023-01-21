function validar() {
    // let expReg = /\W\B|[A-Z]/g; busca caracteres especiales
    let expReg = /[A-Z]/g;
    texto = document.getElementById("mensaje").value.toLowerCase();
    cod = expReg.test(texto);
    
    if(document.getElementById("mensaje").value.trim() == "") {
        alert("No ha introducido ningún texto");
        return false;    
    }
    if (cod == true) {
        alert('Evite agregar mayúsculas y/o \ncaracteres especiales como:\n´ ! " # $ % / ( ) etc');
        return false;
    }
    document.getElementById("btnCopiar").style.display = '';
    document.getElementById("atencion").style.display="none";
    document.getElementById("atencion2").style.display="none";
    document.querySelector(".der").style.backgroundImage= "none";
}   
function encriptar() {
    
    if (validar() == false){
        return;
    }
    cifrado = texto.replaceAll('e', "enter")
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
    document.getElementById("resultado").style.display = '';
    document.getElementById("resultado").innerHTML = cifrado;
    document.getElementById("mensaje").value = "";                
    
}  
function desencriptar() {
    
    if (validar() == false){
        return;
    }                
    cifrado = texto.replaceAll('enter', "e")
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
    document.getElementById("resultado").style.display = '';
    document.getElementById("resultado").innerHTML = cifrado;
    document.getElementById("mensaje").value = ""; 
}   
function copiar(){
    contenido = document.getElementById("resultado");
    contenido.select();
    contenido.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(contenido.value);
    alert("Se copio el texto: " + contenido.value);
    document.getElementById("resultado").style.display = '';
    document.getElementById("mensaje").value = contenido.value;
    document.getElementById("resultado").innerHTML = '';
                  
}
