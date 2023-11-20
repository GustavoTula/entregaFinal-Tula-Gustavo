document.addEventListener('DOMContentLoaded', function() {
    const userInputDiv = document.getElementById('userInput');
    const destinosDiv = document.getElementById('destinos');
    const resultadoDiv = document.getElementById('resultado');
    const confirmarDatosButton = document.getElementById('confirmarDatos');
    const confirmarDestinoButton = document.getElementById('confirmarDestino');
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const dniInput = document.getElementById('dni');
    const destinosList = document.querySelectorAll('#destinosList li');
    let usuario = null;
    let destinoElegido = null;

    const usuarioGuardado = sessionStorage.getItem('usuario');
    if (usuarioGuardado) {
        usuario = JSON.parse(usuarioGuardado);
        userInputDiv.style.display = 'none';
        cargarDestinos(); 
    }

    confirmarDatosButton.addEventListener('click', function() {
        const nombre = nombreInput.value;
        const edad = parseInt(edadInput.value);
        const dni = dniInput.value;

        if (nombre && !isNaN(edad) && dni) {
            usuario = { nombre, edad, dni };
            userInputDiv.style.display = 'none';
            cargarDestinos(); 
            sessionStorage.setItem('usuario', JSON.stringify(usuario));
        } else {
            alert("Por favor, complete todos los campos correctamente.");
        }
    });

    destinosList.forEach(destino => {
        destino.addEventListener('click', function() {
            destinoElegido = destino.getAttribute('data-destino');
            confirmarDestinoButton.style.display = 'block';
        });
    });

    confirmarDestinoButton.addEventListener('click', function() {
        if (destinoElegido) {
            const datosUsuario = `Nombre ingresado: ${usuario.nombre}\nEdad: ${usuario.edad}\nDNI: ${usuario.dni}`;
            const mensaje = `Información del usuario:\n\n${datosUsuario}\nDestino elegido: ${destinoElegido}`;

            Swal.fire({
                title: 'Información del Usuario y Destino',
                text: mensaje,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            });
        }
    });

    function cargarDestinos() {
        fetch('destinos.json') 
            .then(response => response.json())
            .then(data => {
                
                actualizarListaDestinos(data);
            })
            .catch(error => {
                console.error('Error al cargar destinos:', error);
            });
    }


    function actualizarListaDestinos(destinos) {
        destinosList.forEach((destino, index) => {

            destino.innerHTML = `${destinos[index].nombre} - $${destinos[index].precio}`;
            destino.setAttribute('data-destino', destinos[index].nombre);
        });
        destinosDiv.style.display = 'block';
    }
});
