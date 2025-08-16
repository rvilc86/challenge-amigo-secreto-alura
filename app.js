// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo) {
        if (!amigos.includes(nombreAmigo)) {
            amigos.push(nombreAmigo);
            actualizarListaAmigos();
            limpiarCampo();
        } else {
            alert('Este nombre ya ha sido añadido.');
        }
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un amigo para sortear.');
        return;
    }
    
    // Obtener un índice aleatorio dentro del rango de la lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Seleccionar el amigo en ese índice
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista con el id 'resultado'
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoLista.appendChild(li);
}

function actualizarListaAmigos() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}