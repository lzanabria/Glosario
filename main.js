addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let frutas=["Manzana", "Sandia", "Melon", "Cereza", "Piña"];
        frutas.forEach((val, ind, duplic) => {
            alert(ind+1+". "+val);
        });
    }, 500);
});