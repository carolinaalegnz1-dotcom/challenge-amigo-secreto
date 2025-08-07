let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada y eliminar espacios en blanco al inicio y al final
    let inputAmigo = document.querySelector('#amigo');
    let valorAmigo = inputAmigo.value.trim();

    // 2. Validar que el campo no esté vacío
    if (valorAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; // Detener la función si el campo está vacío
    }

    // 3. Validar que el nombre no esté duplicado
    if (amigos.includes(valorAmigo)) {
        alert('Este nombre ya está en la lista.');
        return; // Detener la función si el nombre está duplicado
    }

    // 4. Agregar el nombre al array de amigos
    amigos.push(valorAmigo);

    // 5. Crear un nuevo elemento <li> para mostrar el nombre en la lista
    let listaAmigos = document.querySelector('#listaAmigos');
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = valorAmigo;
    listaAmigos.appendChild(nuevoAmigo);
    
    // 6. Limpiar el campo de entrada
    inputAmigo.value = '';
}

function mostrarAmigos() {
    // 1. Seleccionar la lista <ul> donde se mostrarán los amigos
    let listaAmigos = document.querySelector('#listaAmigos');
    
    // 2. Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // 3. Recorrer el array de amigos y crear un elemento <li> para cada uno
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles para sortear
    if (amigos.length === 0) {
        alert('Por favor, agregue amigos a la lista antes de sortear.');
        return; // Detener la función si no hay amigos en la lista
    }

    // 2. Generar un índice aleatorio dentro del rango del array amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre del amigo sorteado utilizando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el elemento HTML con el id "resultado"
    let resultadoElemento = document.querySelector('#resultado');
    resultadoElemento.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// 5. Ejecutar la función mostrarAmigos() al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarAmigos();
});

