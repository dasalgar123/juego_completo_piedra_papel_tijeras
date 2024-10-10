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
