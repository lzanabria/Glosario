addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let num_dia=Number(prompt("\t Ingrese el número del día que desea seleccionar: ", 5));
        let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        let dia=(num_dia<=dias.length) ? dias[num_dia-1] : "¡N° de día seleccionado no existe!";
        alert("\t Día seleccionado: "+dia);
    }, 500);
});