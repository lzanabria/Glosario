addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        var saludo=function(nombre="Luis Zanabria"){
            return nombre;
        }
        alert("Hola, soy "+saludo());
    }, 500);
});