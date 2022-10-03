addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        //Sin función flecha
        frase = function() {
            return "¡Hello World!";
        }

        //Con función flecha
        frase = () => {
            return "¡Hello World!";
        }

        alert(frase());
    }, 500);
});