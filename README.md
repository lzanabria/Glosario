## **<u>GLOSARIO.</u>**

#### **CICLO.**

Es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.

```js
for(let i=1; i<=3; i++) {
    alert("Ciclo "+i)
}
```

#### **ITERACIÓN.**

Es un proceso que nos permite recorrer una colección repetidas veces y devolver un valor al terminar.

```js
let nums=["A", "E", "I", "O", "U"];
nums.forEach((val, ind, duplic) => {
    alert(val);
});
```

#### **forEach.**

Es el conjunto de un ciclo y una iteración, el cual es un método que permite llamar a un callback una vez para cada item sobre el que se itera dentro de un array.

```js
let frutas=["Manzana", "Sandia", "Melon", "Cereza", "Piña"];
frutas.forEach((val, ind, duplic) => {
    alert(ind+1+". "+val);
});
```

#### **map.**

Es un método, que crea un duplicado con las modificaciones que itera llamando a un callback para cada item de la variable original, por lo que a su vez no altera a esta misma.

```js
let numbers=[65, 44, 12, 4];
let newArr=numbers.map(num => num*10);
alert(newArr);
```

