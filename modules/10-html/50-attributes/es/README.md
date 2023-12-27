La estructura de la información en una página web incluye muchos detalles y matices. Por ejemplo, no solo se puede especificar el tipo de elemento, sino también proporcionar información adicional que será procesada por el navegador. Pase el cursor sobre el siguiente texto:

<div class="hexlet-basics-example my-3">
  <p title="Tooltip. Aquí se puede proporcionar información adicional" class="m-0">Pase el cursor sobre esta línea de texto. Es mejor hacerlo desde una computadora</p>
</div>

Al pasar el cursor sobre el elemento, aparece una pequeña ventana con el texto "Tooltip. Aquí se puede proporcionar información adicional". Este comportamiento se establece mediante _atributos_, que son construcciones especiales que pueden afectar la visualización de la información en la página. Cada etiqueta en HTML tiene varios atributos estándar que se escriben según el patrón `atributo="valor"`, donde:

* **Atributo** - el nombre del atributo. Para mostrar un tooltip, se utilizó el atributo `title`.
* **Valor** - el valor del atributo. Puede ser diferente dependiendo del atributo en sí. En el ejemplo, se utilizó un texto como valor, que se mostrará al pasar el cursor sobre el elemento.

Ejemplo de estructura con tooltip:

```html
<p title="Tooltip. Aquí se puede proporcionar información adicional">Pase el cursor sobre esta línea de texto. Es mejor hacerlo desde una computadora</p>
```

El atributo `title` se puede utilizar no solo en párrafos, sino en cualquier elemento de la página. Estos atributos se llaman _globales_, ya que no dependen del elemento. Por otro lado, existen atributos que son únicos para una o varias etiquetas. Por ejemplo, el atributo `colspan`, que indica la combinación de celdas en tablas. Su uso fuera de las tablas no tiene sentido.

Los atributos pueden afectar indirectamente la visualización de la información. Por ejemplo, al utilizar el lenguaje de estilos _CSS_, se encuentra el atributo `class`, cuya tarea es diferenciar elementos similares entre sí mediante el valor del atributo. Aprenderá sobre el trabajo con clases en el curso de _CSS_, pero por ahora es importante saber que este atributo no tiene ningún efecto en la visualización de la información en la página.

```html
<p class="lead">Párrafo con la clase lead</p>
<p class="mega-paragraph">Párrafo con la clase mega-paragraph</p>
```

Una etiqueta puede tener varios atributos especificados al mismo tiempo. Se escriben en secuencia y el orden no importa:

```html
<p class="text-center" title="Este elemento tiene varios atributos">Párrafo con varios atributos</p>
```

En esta lección hemos aprendido el concepto de atributo y su escritura. Hemos estudiado los atributos `title` y `class`, y también hemos aprendido que los atributos pueden ser globales o únicos para los elementos HTML. Los atributos globales se pueden utilizar en cualquier etiqueta, mientras que los atributos únicos solo se aplican a etiquetas específicas.
