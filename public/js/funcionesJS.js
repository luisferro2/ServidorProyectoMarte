function mensajeBorrar(idInput){
    document.getElementById(idInput).style.display = "block";
}

function revisarCodigo(code){
    if(code!='5678')alert('Código de acceso denegado')
}