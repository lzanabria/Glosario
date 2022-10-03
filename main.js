addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let frase="¡Esto está fuera del bloque!"; //scope global
        if (true) {
            let frase="¡Esto está dentro del bloque!";  //scope local
            alert(frase); //¡Esto está dentro del bloque!
        }
        alert(frase); //¡Esto está fuera del bloque!
    }, 500);
});