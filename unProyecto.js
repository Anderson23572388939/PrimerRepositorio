document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");
    const texto = titulo.textContent;
    titulo.textContent = ""; // Limpiar el texto original

    // Crear un span por cada letra
    texto.split(" ").forEach((letra, index) => {
        const span = document.createElement("span");
        span.textContent = letra;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.05}s`; // Agregar retraso para cada letra
        titulo.appendChild(span);
    });
});
