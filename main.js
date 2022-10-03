addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        function saludo(nombre="Luis Zanabria") {
            return nombre;
        }
        alert("Hola, soy "+saludo());
    }, 500);
});