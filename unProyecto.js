document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");
    const texto = titulo.textContent;
    titulo.textContent = ""; // Limpiar el texto original

    // Crear un span por cada letra, respetando los espacios
    texto.split("").forEach((letra, index) => {
        const span = document.createElement("span");
        span.textContent = letra;
        
        if (letra === " ") {
            span.classList.add("space"); // Se agrega una clase especial para los espacios
        } else {
            span.classList.add("letter");
            span.style.animationDelay = `${index * 0.05}s`; // Agregar retraso para cada letra
        }

        titulo.appendChild(span);
    });
});
