addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        function padre() {
            let numero=5;
            function hijo() {
                numero+=10;
                return numero;
            }
            return hijo;
        }
        let closure=padre();
        alert("\tResultado: "+closure());
    }, 500);
});