
Cuanto más largo es el texto, más se divide en secciones lógicas. Por ejemplo, la estructura básica de un informe, un diploma o un ensayo consta de tres partes principales:

1. Introducción
2. Parte principal
3. Conclusión

Estas divisiones lógicas en títulos permiten orientarse más rápidamente en el documento y encontrar la parte que se necesita.

Para crear títulos se utilizan 6 pares de etiquetas: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, donde `<h1>` es el título de primer nivel, el más importante y que describe el tema principal del texto, y `<h6>` es el título de nivel más bajo.

```html
<h1>Título de primer nivel</h1>
<h2>Título de segundo nivel</h2>
<h3>Título de tercer nivel</h3>
<h4>Título de cuarto nivel</h4>
<h5>Título de quinto nivel</h5>
<h6>Título de sexto nivel</h6>
```

<div class="hexlet-basics-example my-3">
  <h1>Título de primer nivel</h1>
  <h2>Título de segundo nivel</h2>
  <h3>Título de tercer nivel</h3>
  <h4>Título de cuarto nivel</h4>
  <h5>Título de quinto nivel</h5>
  <h6>Título de sexto nivel</h6>
</div>

Cada título de nivel inferior es una subsección del título de nivel superior. Esto es muy similar a la tabla de contenido de cualquier libro, cuya estructura puede ser así:

* Capítulo 1
  * Parte 1
  * Parte 2
    * Notas
  * Parte 3
* Capítulo 2

```html
<h1>El mejor libro en la Tierra</h1>
<p>Descripción del libro. Agradecimientos a mi gato y a mis dos perros. ¡Miau!</p>

<h2>Capítulo 1</h2>

<h3>Parte 1</h3>
<p>Párrafo con texto</p>
<p>Párrafo con texto</p>

<h3>Parte 2</h3>
<p>Párrafo con texto</p>
<p>Párrafo con texto</p>
<h4>Notas</h4>
<p>Este texto de la nota está escrito con amor</p>

<h3>Parte 3</h3>
<p>Párrafo con texto</p>
<p>Párrafo con texto</p>

<h2>Capítulo 2</h2>
```
