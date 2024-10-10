// Daniel Crear una instancia  la funcionalidad de género
class Genero {
    constructor() {
        // Inicializa los eventos del género
        this.initGeneroListeners();
    }

    // Daniel Crear una instancia  la funcionalidad de los eventos relacionados con el género
    initGeneroListeners() {
        document.querySelectorAll('.btnPerfil').forEach(btn => {
            btn.addEventListener('click', (e) => this.seleccionarGenero(e));
        });
    }

    // Daniel Crear una instancia  Método para seleccionar el género 
    seleccionarGenero(e) {
        const perfil = e.target.textContent;
        console.log(`Género seleccionado: ${perfil}`);
        document.getElementById('btnJugar').style.display = 'block';
    }
}