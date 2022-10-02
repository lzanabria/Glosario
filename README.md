## **<u>GLOSARIO.</u>**

#### **Ciclo.**

Es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.

```js
for(let i=1; i<=3; i++) {
    alert("Ciclo "+i)
}
```

#### **Iteración.**

Es un proceso que nos permite recorrer una colección repetidas veces y devolver un valor al terminar.

```js
let nums=["A", "E", "I", "O", "U"];
nums.forEach((val, ind, duplic) => {
    alert(val);
});
```

#### **ForEach.**

Es el conjunto de un ciclo y una iteración, el cual es un método que permite llamar a un callback una vez para cada ítem sobre el que se itera dentro de un array.

```js
let frutas=["Manzana", "Sandia", "Melon", "Cereza", "Piña"];
frutas.forEach((val, ind, duplic) => {
    alert(ind+1+". "+val);
});
```

#### **Map.**

Es un método, que crea un duplicado con las modificaciones que itera llamando a un callback para cada ítem de la variable original, por lo que a su vez no altera a esta misma.

```js
let numbers=[65, 44, 12, 4];
let newArr=numbers.map(num => num*10);
alert(newArr);
```

#### **Filter.**

Es un método que crea un duplicado de una matriz, llenando a esta nueva con las modificaciones que itera llamando a un callback para cada ítem de la matriz original, por lo que a su vez no altera a esta misma.

```js
let edades=[9, 45, 18, 50, 15, 17, 21, 11];
let mayores=edades.filter(edad => edad>=18);
alert("\tEdades: "+edades+"\n\tMayores de edad: "+mayores);
```

#### **Search.**

Este método compara una cadena con una expresión regular, luego devuelve el índice (posición) de la primera coincidencia o devuelve -1 si no se encuentra ninguna coincidencia.

```js
let text="Este es un mensaje de prueba";
let posicion=text.search("mensaje");
alert(posicion);
```

