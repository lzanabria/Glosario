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

#### **Operador ternario.**

El operador ternario es una estructura compacta para hacer condicionales, consiste de una expresión que se evaluará y dependiendo de si dicha evaluación fue positiva o negativa devolverá una u otra cosa.

***Nota:** el operador condicional se conoce como ternario porque tiene tres operadores, tanto la expresión condicional a evaluar como dos expresiones a ejecutar para el caso positivo o el negativo.*

```js
let num_dia=Number(prompt("\t Ingrese el número del día que desea seleccionar: ", 5));
let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let dia=(num_dia<=dias.length) ? dias[num_dia-1] : "¡N° de día seleccionado no existe!";
alert("\t Día seleccionado: "+dia);
```

#### **Parámetros de funciones.**

Los parámetros predeterminados de función permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor.

```js
function multiplicar(a, b=10) {
    return a*b;
}
alert("▶ a=3 \n▶ b=9\n\t Resultado: "+multiplicar(3, 9)); //Se le ha dado un valor a=2 y b=9
alert("▶ a=5 \n▶ b=No se le asignó un valor\n\t Resultado: "+multiplicar(5)); //Sólo se le dió valor a=5 y a la b no se le dió ningún valor, de manera que toma su valor predeterminado que es b=10
```

#### **Nivel de scope.**

El nivel de scope es el alcance que una variable tendrá en el código, en otras palabras, este decide a qué variables se tiene acceso en cada parte del código. Existen dos niveles de scope; el scope global y el scope local.

```js
let frase="¡Esto está fuera del bloque!"; //scope global
if (true) {
    let frase="¡Esto está dentro del bloque!";  //scope local
    alert(frase); //¡Esto está dentro del bloque!
}
alert(frase); //¡Esto está fuera del bloque!
```

