
alert("Bienvenidos al sistema de viaje CAMBA!");
alert("Puede elegir su destino favorito dentro de la Argentina teniendo en cuenta sus gustos!");

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let dni = prompt("Ingrese su DNI");

let datosUsuario = "Nombre ingresado: " + nombre + "\nEdad: " + edad + "\nDNI: " + dni;
alert(datosUsuario);

let editarDatos = prompt("¿Está conforme con los datos ingresados?\n1 - Sí\n2 - No");

if (editarDatos === "2") {
    alert("Volvamos a editar los datos ingresados.");
    nombre = prompt("Ingrese su nombre");
    edad = prompt("Ingrese su edad");
    dni = prompt("Ingrese su DNI");
    datosUsuario = "Nombre ingresado: " + nombre + "\nEdad: " + edad + "\nDNI: " + dni;
    alert(datosUsuario);
}

alert("Sigamos con su elección de provincias que desea recorrer");
alert("1: Mendoza - $40,000");
alert("2: Buenos Aires - $50,000");
alert("3: Córdoba - $35,000");
alert("4: Santa Cruz - $70,000");

let opcionDestino = prompt("Ingrese el número del destino que desea visitar");

switch (opcionDestino) {
    case "1":
        alert(nombre + ", lo esperamos en Mendoza por un total de: $40,000");
        break;
    case "2":
        alert(nombre + ", lo esperamos en Buenos Aires por un total de: $50,000");
        break;
    case "3":
        alert(nombre + ", lo esperamos en Córdoba por un total de: $35,000");
        break;
    case "4":
        alert(nombre + ", lo esperamos en Santa Cruz por un total de: $70,000");
        break;
    default:
        alert("Opción no válida. Hasta la próxima.");
}