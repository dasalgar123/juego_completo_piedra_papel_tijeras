// Daniel Crear una instancia  la funcionalidad de PerfilUsuario
class PerfilUsuario {
    constructor() {
        this.nombreInput = document.querySelector('input[placeholder="favor, ingrese su nombre"]');
        this.mensajeNombre = document.getElementById('respuesta_tu_nombre');
        this.genero = null;
        this.imgPerfil = null;
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Evento para capturar el formulario
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.mostrarNombre();
        });

        // Eventos para capturar el género seleccionado
        document.getElementById('btnHombre').addEventListener('change', () => {
            this.genero = 'Hombre';
        });
        document.getElementById('btnMujer').addEventListener('change', () => {
            this.genero = 'Mujer';
        });

        // Evento para capturar la imagen seleccionada (puedes mejorar cómo se selecciona)
        const imagenes = document.querySelectorAll('.img-container img');
        imagenes.forEach((img) => {
            img.addEventListener('click', (event) => {
                this.imgPerfil = event.target.src;
                this.actualizarImagenPerfil();
            });
        });
    }

    mostrarNombre() {
        const nombre = this.nombreInput.value;
        if (nombre) {
            this.mensajeNombre.innerHTML = `Tu nombre es <strong>${nombre}</strong>`;
        } else {
            alert('Por favor, ingrese su nombre');
        }

        // Guardar o mostrar datos adicionales (género y perfil)
        console.log(`Nombre: ${nombre}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Imagen de perfil: ${this.imgPerfil}`);
    }

    actualizarImagenPerfil() {
        const imgPerfilElemento = document.getElementById('imgPerfil');
        if (this.imgPerfil) {
            imgPerfilElemento.src = this.imgPerfil;
        }
    }
}

// Inicializa el perfil del usuario cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PerfilUsuario();
});
