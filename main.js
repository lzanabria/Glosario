addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let text="Este es un mensaje de prueba";
        let posicion=text.search("mensaje");
        alert(posicion);
    }, 500);
});