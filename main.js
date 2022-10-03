addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        function multiplicar(a, b=10) {
            return a*b;
        }
        alert("▶ a=3 \n▶ b=9\n\t Resultado: "+multiplicar(3, 9)); //Se le ha dado un valor a=2 y b=9
        alert("▶ a=5 \n▶ b=No se le asignó un valor\n\t Resultado: "+multiplicar(5)); //Sólo se le dió valor a=5 y a la b no se le dió ningún valor, de manera que toma su valor predeterminado que es b=10
    }, 500);
});