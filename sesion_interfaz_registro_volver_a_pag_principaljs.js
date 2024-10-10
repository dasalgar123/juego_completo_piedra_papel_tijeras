class VolverAPagPrincipal {
    constructor() {
        document.getElementById("btnvolvr_pagina_principal").addEventListener("click", () => {
            this.redirectToPage("https://juegopagprincipal.netlify.app");
        });
    }

    redirectToPage(url) {
        window.location.href = url;
    }
}

// Instancia la clase para que funcione
new VolverAPagPrincipal();
