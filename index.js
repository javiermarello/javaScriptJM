/*Esta app va orientada al html que hice en DW. La idea es poder ingresar datos personales, chequear disponibilidad de cursos, pagar, etc*/

/*

    let ingresoNombre = prompt("Ingresá tu nombre por favor");

    while (ingresoNombre == ""){
        ingresoNombre = prompt("[Error] Ingresá un nombre válido por favor");
    }
    alert("Has ingesado: " + ingresoNombre)
 

    let ingresoApellido = prompt("Ingresá tu apellido por favor");

    while (ingresoApellido == ""){
        ingresoApellido = prompt("[Error] Ingresá un apellido válido por favor");
    }
    alert("Has ingesado: " + ingresoApellido)


    let ingresoMail = prompt("Ingresá tu correo electronico por favor");

    while (ingresoMail == ""){
        ingresoMail = prompt("[Error] Ingresá una direccion de mail válida por favor");
    }
    alert("Has ingesado: " + ingresoMail)




let ingresoDni = prompt("Ingresa tu numero de DNI sin puntos ni espacios");

while (ingresoDni == ""){
    ingresoDni = prompt("[Error] Ingresá un numero de DNI valido por favor");
}
while ((ingresoDni <= 9999999 ) && ( ingresoDni >= 99999999 )){
    alert("El numero ingresado no corresponde a un numero de DNI, por favor vuelva a intentarlo")
}
alert("ud ha ingresado el numero " + ingresoDni)




alert("Bienvenido" + " " + ingresoNombre);

alert("Datos Ingresados: " + "Nombre:  " + ingresoNombre + "   . Apellido:  " + ingresoApellido + ".  Mail: " + ingresoMail + "  . DNI: " + ingresoDni);





let turno = prompt("En que turno queres cursar?: \n1- Mañana \n2- Noche");


while(isNaN(turno)){
    turno = parseInt(prompt('[Error] Debes ingresar un numero valido. \n1- Turno Mañana \n2- Turno Noche '))}

if ((turno == "1") || (turno == "2")) {

    let curso = prompt("En que curso estas interesado? \n1- ingles \n2- aleman \n3- italiano \n4- portugues \n5- chino \n6- frances");


    const suma = (a, b) => a + b;
    const multiplicacion = (a,b) => a * 12;
    const iva = x => x * 0.21;

    let precioCuotaIngles = 5800;
    let precioCuotaChino = 9000;
    let precioCuotaItaliano = 7200;
    let precioCuotaPortugues = 5500;
    let precioCuotaFrances = 6500;
    let precioCuotaAleman = 12000;

    let precioMensualIngles = suma(precioCuotaIngles, iva(precioCuotaIngles));
    let precioMensualChino = suma(precioCuotaChino, iva(precioCuotaChino));
    let precioMensualItaliano = suma(precioCuotaItaliano, iva(precioCuotaItaliano));
    let precioMensualPortugues = suma(precioCuotaPortugues, iva(precioCuotaPortugues));
    let precioMensualFrances = suma(precioCuotaFrances, iva(precioCuotaFrances));
    let precioMensualAleman = suma(precioCuotaAleman, iva(precioCuotaAleman));

    let precioAnualIngles = multiplicacion(precioMensualIngles);
    let precioAnualChino = multiplicacion(precioMensualChino);
    let precioAnualItaliano = multiplicacion(precioMensualItaliano);
    let precioAnualPortugues = multiplicacion(precioMensualPortugues);
    let precioAnualFrances = multiplicacion(precioMensualFrances);
    let precioAnualAleman = multiplicacion(precioMensualAleman);


    while (curso != "continuar") {
        switch (curso) {
            case "1":
                alert("el curso IDIOMA INGLES está disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' + precioMensualIngles);
                alert('Total abonado el año completo: ' + '$' + precioAnualIngles);
                break;
            case "2":
                alert("el curso IDIOMA CHINO esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' + precioMensualChino);
                alert('Total abonado el año completo: ' + '$' + precioAnualChino);
                break;
            case "3":
                alert("el curso IDIOMA ITALIANO esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualItaliano);
                alert('Total abonado el año completo: ' + '$' + precioAnualItaliano);
                break;
            case "4":
                alert("el curso IDIOMA PORTUGUES esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualPortugues);
                alert('Total abonado el año completo: ' + '$' + precioAnualPortugues);
                break;
            case "5":
                alert("el curso IDIOMA FRANCES esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualFrances);
                alert('Total abonado el año completo: ' + '$' + precioAnualFrances);
                break;
            case "6":
                alert("el curso IDIOMA ALEMAN esta disponible");
                alert('El precio  de la cuota mensual es:  ' + '$' +  precioMensualAleman);
                alert('Total abonado el año completo: ' + '$' + precioAnualAleman);
                break;
            default:
                alert("el curso ingresado no esta disponible")
                break;
        }
        curso = prompt("Para continuar con la inscripción escribe 'continuar'")
    }
} else {
    alert("no se puede cursar en ese turno")
}

    





let formaPago = prompt("Como desea abonar?");

if ((formaPago == "tarjeta") && (formaPago != "")){
    let numeroTarjeta = prompt("ingrese los 16 digitos de su tarjeta");
    if ((numeroTarjeta >= 999999999999999 ) && (numeroTarjeta <= 9999999999999999)){
        alert("El numero ingresado es" + numeroTarjeta)
    }
    else{
        formaPago = prompt("el numero ingresado no es válido, vuelva a ingresarlo.")
    }

}
else{
    alert("para pagos en efectivo dirijase a la secretaría del instituto")}




*/






/* 
PARA CONTAR CARACTERES, CAMBIAR A MAYUSCULAS O MINUSCULAS

let cadena = prompt('ingresa un texto');



if(cadena.length>23){
    alert(cadena.toUpperCase())
}
else{alert(cadena.toLowerCase())}

 */