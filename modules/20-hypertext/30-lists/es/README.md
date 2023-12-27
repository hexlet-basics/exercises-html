
Las listas son una forma de representar contenido en una página. Con ellas, es fácil agrupar fragmentos pequeños relacionados, como una lista de compras:

```
- Leche
- Pan
- Agua
```

Se puede hacer esta lista con tres párrafos, pero a primera vista parecerá que son tres frases diferentes sin un sentido común.

<div class="hexlet-basics-example my-3">
  <p>Leche</p>
  <p>Pan</p>
  <p class="m-0">Agua</p>
</div>

Para vincular esta información correctamente, se utilizan las listas. Para crearlas en HTML, se utilizan varios tags anidados:

* `<ul>` o `<ol>` para definir el tipo de lista
* `<li>` para crear un elemento de lista

El esquema general de marcado se ve así:

```
<tipo_de_lista>
  <elemento_de_lista>Texto</elemento_de_lista>
</tipo_de_lista>
```

## Lista con viñetas

Para crear una lista con viñetas se utiliza el tag `<ul>`.

Las listas con viñetas se utilizan cuando la información no requiere un orden específico. Por ejemplo, la lista de productos del ejemplo anterior. No importa si se compra primero la leche o el pan, lo importante es comprar todos los productos.

```html
<ul>
  <li>Leche</li>
  <li>Pan</li>
  <li>Agua</li>
</ul>
```

<div class="hexlet-basics-example my-3">
  <ul class="m-0">
    <li>Leche</li>
    <li>Pan</li>
    <li>Agua</li>
  </ul>
</div>

## Lista numerada

Para agrupar información secuencial se utilizan las listas **numeradas**, que tienen la característica importante de tener un número de orden para cada elemento.

Estas listas son útiles cuando se indica una secuencia de acciones que se deben realizar. Una lista numerada se crea con el tag `<ol>`, dentro del cual también se encuentran los elementos en los tags `<li>`.

Lista de tareas para el día

<div class="hexlet-basics-example my-3">
  <ol class="m-0">
    <li>Comprar comida para mascotas</li>
    <li>Ir a la casa de Alex</li>
    <li>Preparar la cena</li>
  </ol>
</div>

en el marcado HTML se ve así:

```html
<ol>
  <li>Comprar comida para mascotas</li>
  <li>Ir a la casa de Alex</li>
  <li>Preparar la cena</li>
</ol>
```
