
Al crear una lista de tareas, puede ser necesario dividir los elementos en varios subelementos adicionales. Por ejemplo, en una lista de tareas, el elemento "Ir al supermercado" puede contener una lista de compras.

Para crear esta estructura se utilizan _listas anidadas_. Esto permite incluir como elemento de la lista no solo texto, sino también una nueva lista, creando una estructura compleja:

<div class="hexlet-basics-example my-3">
  <ul class="m-0">
    <li>Ir al supermercado
      <ul>
        <li>Comprar leche</li>
        <li>Comprar pan</li>
      </ul>
    </li>
    <li>Tomar lecciones en Code Basics</li>
  </ul>
</div>

Así es como se ve en HTML:

```html
<ul>
  <li>Ir al supermercado
    <ul>
      <li>Comprar leche</li>
      <li>Comprar pan</li>
    </ul>
  </li>
  <li>Tomar lecciones en Code Basics</li>
</ul>
```

Es importante destacar que la lista anidada es parte del elemento de la lista y se encuentra dentro de la etiqueta `<li>`:

```html
<li>Ir al supermercado
  <ul>
    <li>Comprar leche</li>
    <li>Comprar pan</li>
  </ul>
</li>
```

Esta anidación permite mantener la semántica y especificar que la lista anidada se refiere específicamente al elemento "Ir al supermercado" y no a cualquier otro.

Puedes anidar listas de diferentes tipos entre sí: con viñetas y numeradas. Lo más importante es asegurarse de abrir y cerrar las etiquetas correctamente. En caso de error, el navegador intentará corregir el error automáticamente, pero esto puede no ser correcto.
