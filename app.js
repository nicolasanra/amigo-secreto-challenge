// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres de los participantes

let amigos = [];
/**
 * Agrega un amigo a la lista y lo muestra en pantalla.
 */
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Agrega el nombre a la lista
    amigos.push(nombre);

    // Mostrarlo en la lista
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el input
    input.value = "";
}

/**
 * hacer el sorteo y mostrar resultados
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos participantes.");
        return;
    }

    let asignados = [...amigos];
    let resultadoFinal = [];

    amigos.forEach(participante => {
        let amigoAsignado;

        do {
            // Seleccion de un amigo al azar
            amigoAsignado = asignados[Math.floor(Math.random() * asignados.length)];
        } while (amigoAsignado === participante);

        // Guarda el resultado
        resultadoFinal.push(`${participante} → ${amigoAsignado}`);

        // Elimina al amigo ya asignado de la lista para evitar repeticiones
        asignados = asignados.filter(nombre => nombre !== amigoAsignado);
    });

    // Mostrar resultados
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    resultadoFinal.forEach(texto => {
        let li = document.createElement("li");
        li.textContent = texto;
        resultadoLista.appendChild(li);
    });

}
