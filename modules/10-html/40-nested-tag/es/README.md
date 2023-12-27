
Un concepto importante en HTML es la anidación de etiquetas. Dentro de una etiqueta HTML se pueden colocar no solo texto, como se hizo anteriormente, sino también otras etiquetas. Esto permite crear diseños complejos en los que las áreas están separadas entre sí: el menú del encabezado del sitio, el bloque publicitario del contenido principal, y así sucesivamente.

Algunos elementos en HTML requieren la anidación de unas etiquetas dentro de otras. Por ejemplo, las listas:

```html
<ul>
  <li>Primer elemento de la lista</li>
  <li>Segundo elemento de la lista</li>
</ul>
```

<div class="hexlet-basics-example my-3">
  <ul class="m-0">
    <li>Primer elemento de la lista</li>
    <li>Segundo elemento de la lista</li>
  </ul>
</div>

Para definir una lista se utiliza la etiqueta `<ul>`, que indica que es una lista _marcada_. Dentro de ella se encuentran las etiquetas `<li>`, que definen los elementos de nuestra lista.

Estas anidaciones son similares a los árboles, donde hay un nodo raíz (la etiqueta `<ul>`) y hojas (las etiquetas `<li>`)

```
|──ul
| |──li
| |──li
```

---

**Interesante:** una etiqueta que contiene otras etiquetas también se llama _wrapper_ o _envoltorio_

---

El árbol puede seguir creciendo. En las lecciones sobre listas se mostrará que dentro de los elementos de la lista pueden haber otras listas, y este proceso es casi infinito.

Pero también hay excepciones. En HTML no se pueden anidar párrafos dentro de párrafos. El siguiente ejemplo sería incorrecto:

```html
<p>Párrafo
  <p>Aquí hay otro párrafo dentro del párrafo</p>.
  El párrafo no está satisfecho con esta proximidad
</p>
```

En esta lección hemos aprendido sobre el concepto de anidación de etiquetas en HTML y lo hemos visto en el ejemplo de la creación de listas marcadas. A lo largo del curso, aprenderás muchas situaciones en las que la anidación es la mejor solución, así como conocerás las etiquetas que no se pueden anidar entre sí.
