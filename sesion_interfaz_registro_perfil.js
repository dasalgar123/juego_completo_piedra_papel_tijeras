
// daniel hace instancia para la funcionalidad de perfil
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