/*esta app me permite conocer la disponibilidad de cursos en ciertos turnos de cursada. Ejemplo: Si ingreso turno "mañana" voy a poder elejir un curso. Si en cambio elijo turno "tarde" me va a decir que no hay disponibilidad. 
Cuando elijo un curso del que hay disponibilidad, me dice que el curso esta disponible y me pregunta en que otro curso estoy interesado (Siempre teniendo en cuenta que al principio elegí el turno mañana. Tal vez debería volver a preguntar el turno, pero no me salió...*/


let turno = prompt("En que turno queres cursar?");

if (turno == "mañana") {

    let curso = prompt("En que curso estas interesado?");

    while (curso != "esc") {
        switch (curso) {
            case "java script":
                alert("el curso Java Script está disponible");
                break;
            case "desarrollo web":
                alert("el curso desarrollo Web esta disponible");
                break;
            case "ux ui":
                alert("el curso ux ui esta disponible");
                break;
            default:
                alert("el curso ingresado no esta disponible")
                break;
        }
        curso = prompt("En que otro curso estas interesado?")
    }
}

else{
    alert("no se puede cursar en ese turno")
}