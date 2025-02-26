function mostrarFormulario() {
    document.getElementById('formulario-anuncio').classList.toggle('hidden');
}

function guardarAnuncio() {
    const titulo = document.getElementById('titulo-anuncio').value;
    const descripcion = document.getElementById('descripcion-anuncio').value;
    const categoria = document.getElementById('categoria-anuncio').value;
    const tamano = document.getElementById('tamano-anuncio').value;

    if (titulo && descripcion) {
        const anuncio = document.createElement('div');
        anuncio.classList.add('anuncio');
        anuncio.innerHTML = `<h3>${titulo}</h3><p>${descripcion}</p><p>Categoría: ${categoria}</p><p>Tamaño: ${tamano}</p>`;
        
        document.getElementById('lista-anuncios').appendChild(anuncio);

        document.getElementById('titulo-anuncio').value = '';
        document.getElementById('descripcion-anuncio').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function procesarPago(metodo) {
    alert(`Procesando pago con ${metodo}. Esta función se integrará pronto.`);
}