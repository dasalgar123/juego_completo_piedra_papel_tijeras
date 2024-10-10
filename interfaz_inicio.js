// Clase para manejar el inicio del juego
class IniciarJuego {
    constructor() {
        this.pedirNombre = new Pedir_y_guardar_Nombre(); // Pedir nombre
        this.pedirContraseña = new Pedir_y_guardar_Contraseña(); // Pedir contraseña
        this.salir = new SalirDelJuego(); // Instancia de la clase Salir
        this.volverInicio = new Volver_A_Pag_Inicio(); // Instancia de la clase VolverAInicio
        this.asignarEventos(); // Asignar eventos a los botones
    }

    // Método para asignar los eventos a los botones
    asignarEventos() {
        document.getElementById('btnEntrar').addEventListener('click', () => {
            this.pedirNombre.mostrarNombre();
            this.pedirContraseña.entrarSesion(); // Llama al método para manejar la sesión
        });

        document.getElementById('btnSalir').addEventListener('click', () => {
            this.salir.salirDelJuego();
        });

        document.getElementById('btnInicio').addEventListener('click', () => {
            this.volverInicio.redirigirInicio(); // Redirige al inicio al hacer clic
        });
    }
}

// Clase para volver a la página principal
class Volver_A_Pag_Inicio {
    constructor() {}

    // Método para redirigir a la página principal
    redirigirInicio() {
        console.log('Redirigiendo al inicio');
        window.location.href = "https://juegopagprincipal.netlify.app";
    }
}

// Clase para manejar el nombre
class Pedir_y_guardar_Nombre {
    constructor() {
        this.nombre = ''; // Almacenar el nombre
    }

    // Método para obtener y mostrar el nombre en pantalla
    mostrarNombre() {
        this.nombre = document.getElementById('nombre_input').value;
        const mensajeDiv = document.getElementById('mensaje');
        if (this.nombre) {
            mensajeDiv.innerHTML = `<p>Tu nombre es: ${this.nombre}</p>`;
        } else {
            mensajeDiv.innerHTML = '<p>Por favor, ingresa tu nombre</p>';
        }
    }
}

// Clase para manejar la contraseña
class Pedir_y_guardar_Contraseña {
    constructor() {
        this.contraseña = ''; // Almacenar la contraseña
    }

    // Método para obtener los valores de nombre y contraseña
    obtenerValores() {
        this.nombre = document.getElementById('nombre_input').value;
        this.contraseña = document.getElementById('password_input').value;
    }

    // Método para verificar la sesión
    entrarSesion() {
        this.obtenerValores();
        if (this.nombre === 'usuario_correcto' && this.contraseña === 'contraseña_correcta') {
            console.log('Sesión iniciada correctamente');
            // Redirigir a la página de registro si la sesión es correcta
            window.location.href = "https://juegoregistrar.netlify.app";
        } else {
            console.log('Nombre o contraseña incorrectos');
            document.getElementById('mensaje').innerHTML = '<p>Nombre o contraseña incorrectos</p>';
        }
    }
}

// Clase para salir del juego
class SalirDelJuego {
    constructor() {}

    salirDelJuego() {
        console.log('Saliendo del juego');
        document.getElementById('mensaje').innerHTML = '<p>Has salido del juego</p>';
        // Podrías añadir aquí más lógica, como cerrar sesión o redirigir a una página de salida
    }
}

// Instancia del juego
const juego = new IniciarJuego();
