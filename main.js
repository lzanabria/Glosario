addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let numbers=[65, 44, 12, 4];
        let newArr=numbers.map(num => num*10);
        alert(newArr);
    }, 500);
});