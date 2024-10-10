 // Daniel Crear una instancia  la funcionalidad de de inicio de sesión
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