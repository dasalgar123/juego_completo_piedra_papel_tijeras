// Clase para la funcionalidad de perfil
class Perfil {
    constructor() {
        // Inicializa los eventos del perfil
        this.initPerfilListeners();
    }

    // Método para inicializar los eventos relacionados con el perfil
    initPerfilListeners() {
        document.querySelectorAll('.perfil-img').forEach(img => {
            img.addEventListener('click', (e) => this.seleccionarPerfil(e));
        });
    }

    // Método para seleccionar un perfil
    seleccionarPerfil(e) {
        const selectedImg = e.target.src;
        document.getElementById('imgPerfil').src = selectedImg;
        document.getElementById('btnJugar').style.display = 'block';
    }
}

// Clase para la funcionalidad de género
class Genero {
    constructor() {
        // Inicializa los eventos del género
        this.initGeneroListeners();
    }

    // Método para inicializar los eventos relacionados con el género
    initGeneroListeners() {
        document.querySelectorAll('.btnPerfil').forEach(btn => {
            btn.addEventListener('click', (e) => this.seleccionarGenero(e));
        });
    }

    // Método para seleccionar el género
    seleccionarGenero(e) {
        const perfil = e.target.textContent;
        console.log(`Género seleccionado: ${perfil}`);
        document.getElementById('btnJugar').style.display = 'block';
    }
}

// Clase para la funcionalidad de registro
class Registro {
    constructor() {
        this.initRegistroListeners();
    }

    initRegistroListeners() {
        document.getElementById('btnRegistrar').addEventListener('click', (e) => this.registrarUsuario(e));
    }

    registrarUsuario(e) {
        e.preventDefault();

        const nombre = document.querySelector('input[placeholder="favor, ingrese su nombre"]').value;
        const contraseña = document.querySelector('input[placeholder="favor, ingrese su contraseña"]').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioExistente = usuarios.find(user => user.nombre === nombre);

        const mensajeContainer = document.getElementById('mensaje');
        mensajeContainer.textContent = '';

        if (!usuarioExistente) {
            usuarios.push({ nombre, contraseña });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            const mensaje = document.createElement("div");
            mensaje.textContent = "¡Registro exitoso!";
            mensaje.style.color = "green";
            mensajeContainer.appendChild(mensaje);
        } else {
            mensajeContainer.textContent = 'El usuario ya existe.';
            mensajeContainer.style.color = "red";
        }
    }
}

// Clase para la funcionalidad de inicio de sesión
class Login {
    constructor() {
        this.initLoginListeners();
    }

    initLoginListeners() {
        document.getElementById('btnEntrar').addEventListener('click', (e) => this.iniciarSesion(e));
    }

    iniciarSesion(e) {
        e.preventDefault();

        const nombre = document.querySelector('input[placeholder="favor, ingrese su nombre"]').value;
        const contraseña = document.querySelector('input[placeholder="favor, ingrese su contraseña"]').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuario = usuarios.find(user => user.nombre === nombre && user.contraseña === contraseña);

        const mensajeContainer = document.getElementById('mensaje');
        mensajeContainer.textContent = '';

        if (usuario) {
            alert('Inicio de sesión exitoso!');
            window.location.href = 'pagina_destino.html'; 
        } else {
            mensajeContainer.textContent = 'Nombre o contraseña incorrectos.';
            mensajeContainer.style.color = "red";
        }
    }
}

// Clase para el manejo de la página principal y navegación
class Navegacion {
    constructor() {
        this.initNavegacionListeners();
    }

    initNavegacionListeners() {
        document.getElementById('btnInicio').addEventListener('click', () => this.irAlInicio());
        document.getElementById('btnSalir').addEventListener('click', () => this.salir());
    }

    irAlInicio() {
        window.location.href = "https://juegopagprincipal.netlify.app";
    }

    salir() {
        alert('Sesión cerrada');
    }
}

// Clase principal para inicializar todo
class App {
    constructor() {
        // Instancia de las clases que manejan cada funcionalidad
        this.perfil = new Perfil();
        this.genero = new Genero();
        this.registro = new Registro();
        this.login = new Login();
        this.navegacion = new Navegacion();
    }
}

// Inicializa la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    new App(); // Crea una nueva instancia de la clase App
});
