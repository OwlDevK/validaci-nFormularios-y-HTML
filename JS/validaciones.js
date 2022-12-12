console.log("››‹›››››››››››››››››››› VAlIDACIONES ››‹››››››››››››››››››››");


const inputNacimiento = document.querySelector("#birth");
inputNacimiento.addEventListener("blur", (event) =>{
    validarNacimiento(event.target);
});

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorEdad(fechaCliente)){ mensaje = "Debes tener al menos 18 años de edad"; }
    input.setCustomValidity(mensaje);
    console.log(mensaje);

}

function mayorEdad(fechaCliente) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaCliente.getUTCFullYear() + 18, 
        fechaCliente.getUTCMonth(), 
        fechaCliente.getUTCDate());
    console.log(fechaActual >= diferenciaFechas);
    // console.log(`Cliente: ${fechaCliente} ------------ Actual:${fechaActual}`)
}