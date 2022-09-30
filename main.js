addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let nums=["A", "E", "I", "O", "U"];
        nums.forEach((val, ind, duplic) => {
            alert(val);
        });
    }, 500);
});