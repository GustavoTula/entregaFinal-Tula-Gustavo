function editarDatosUsuario() {
    alert("Volvamos a editar los datos ingresados.");
    nombre = prompt("Ingrese su nombre");
    edad = prompt("Ingrese su edad");
    dni = prompt("Ingrese su DNI");
    datosUsuario = "Nombre ingresado: " + nombre + "\nEdad: " + edad + "\nDNI: " + dni;
    alert(datosUsuario);
}

alert("Bienvenidos al sistema de viaje CAMBA!");
alert("Puede elegir su destino favorito dentro de la Argentina teniendo en cuenta sus gustos!");

let usuario = {
    nombre: "",
    edad: 0,
    dni: ""
};

usuario.nombre = prompt("Ingrese su nombre");
usuario.edad = parseInt(prompt("Ingrese su edad")); 
usuario.dni = prompt("Ingrese su DNI");

let datosUsuario = "Nombre ingresado: " + usuario.nombre + "\nEdad: " + usuario.edad + "\nDNI: " + usuario.dni;
alert(datosUsuario);

let editarDatos = prompt("¿Está conforme con los datos ingresados?\n1 - Sí\n2 - No");

if (editarDatos === "2") {
    editarDatosUsuario();
}

alert("Sigamos con su elección de provincias que desea recorrer");
alert("1: Mendoza - $40,000");
alert("2: Buenos Aires - $50,000");
alert("3: Córdoba - $35,000");
alert("4: Santa Cruz - $70,000");

let destinos = [
    { nombre: "Mendoza", precio: 40000 },
    { nombre: "Buenos Aires", precio: 50000 },
    { nombre: "Córdoba", precio: 35000 },
    { nombre: "Santa Cruz", precio: 70000 }
];

let opcionDestino = prompt("Ingrese el número del destino que desea visitar");


function buscarDestinoPorNombre(nombre) {
    return destinos.find(destino => destino.nombre === nombre);
}

switch (opcionDestino) {
    case "1":
        let destinoMendoza = buscarDestinoPorNombre("Mendoza");
        if (destinoMendoza) {
            alert(usuario.nombre + ", lo esperamos en " + destinoMendoza.nombre + " por un total de: $" + destinoMendoza.precio);
        }
        break;
    case "2":
        let destinoBuenosAires = buscarDestinoPorNombre("Buenos Aires");
        if (destinoBuenosAires) {
            alert(usuario.nombre + ", lo esperamos en " + destinoBuenosAires.nombre + " por un total de: $" + destinoBuenosAires.precio);
        }
        break;
    case "3":
        let destinoCordoba = buscarDestinoPorNombre("Córdoba");
        if (destinoCordoba) {
            alert(usuario.nombre + ", lo esperamos en " + destinoCordoba.nombre + " por un total de: $" + destinoCordoba.precio);
        }
        break;
    case "4":
        let destinoSantaCruz = buscarDestinoPorNombre("Santa Cruz");
        if (destinoSantaCruz) {
            alert(usuario.nombre + ", lo esperamos en " + destinoSantaCruz.nombre + " por un total de: $" + destinoSantaCruz.precio);
        }
        break;
    default:
        alert("Opción no válida. Hasta la próxima.");
}
