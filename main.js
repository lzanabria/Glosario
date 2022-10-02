addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let edades=[9, 45, 18, 50, 15, 17, 21, 11];
        let mayores=edades.filter(edad => edad>=18);
        alert("\tEdades: "+edades+"\n\tMayores de edad: "+mayores);
    }, 500);
});