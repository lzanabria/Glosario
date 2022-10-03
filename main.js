addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        //No aplica separadores.
        let numero1=1234567890; //Baja legibilidad
        alert(numero1);

        //Si aplica separadores.
        let numero2=1_234_567_890; //Mejor legibilidad
        alert(numero2);
    }, 500);
});