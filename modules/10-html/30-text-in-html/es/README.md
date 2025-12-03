
Dentro de un navegador u otro programa que pueda procesar HTML, el texto se muestra en función de las etiquetas especificadas. Sin ellas, el navegador no entenderá cómo mostrar correctamente el texto.

Veamos un ejemplo de texto y tratemos de mostrarlo utilizando etiquetas de marcado y sin ellas.

Texto:

```html
<p>Creemos que un verdadero programador debe entender cómo funciona una computadora y tener pensamiento computacional. Debe ver el problema, no la tarea. Debe ser capaz de analizar y razonar a nivel del problema y más allá, no solo a nivel de código.</p>

<p>Con la abundancia de materiales de estudio, cursos y libros disponibles hoy en día, la pregunta principal que se plantea a un principiante no es "¿dónde estudiar?", sino "¿qué y en qué orden estudiar?". Hay muchas opiniones al respecto. Algunos sugieren comenzar con matemáticas, otros sugieren lenguajes y tecnologías específicas.</p>

<p class="m-0">Hexlet es un camino completo desde principiante absoluto hasta el primer empleo.</p>
```

Si insertamos el texto en la página sin usar etiquetas, obtendremos este resultado:

```html
We believe that a true programmer must understand how a computer works and be able to think like a computer. They should see a problem, not an assignment. They must be able to analyze and reason at the level of the problem and above, not just at a code level. With today's abundance of study materials, courses, and books, the main question a beginner faces now is not "where to study?" but "what should I study and in what order?". There are many opinions on this subject. Some advise starting with mathematics, while others advise specific languages and technologies. Hexlet is a ready-made path from absolute beginner to your first job.
```

Este no es el resultado esperado: las líneas se han fusionado y se han convertido en una sola línea ilegible. Para que el texto se vea como se pretende, es necesario envolverlo en etiquetas `<p>`:

```html
<p>Creemos que un verdadero programador debe entender cómo funciona una computadora y tener pensamiento computacional. Debe ver el problema, no la tarea. Debe ser capaz de analizar y razonar a nivel del problema y más allá, no solo a nivel de código.</p>

<p>Con la abundancia de materiales de estudio, cursos y libros disponibles hoy en día, la pregunta principal que se plantea a un principiante no es "¿dónde estudiar?", sino "¿qué y en qué orden estudiar?". Hay muchas opiniones al respecto. Algunos sugieren comenzar con matemáticas, otros sugieren lenguajes y tecnologías específicas.</p>

<p>Hexlet es un camino completo desde principiante absoluto hasta el primer empleo.</p>
```

![](../assets/final.png)

Este ejemplo ilustra que el texto formateado en un procesador de textos se convertirá en una sola línea cuando se abra en un navegador, por lo que la información se marca con etiquetas especiales. A lo largo del curso, veremos etiquetas para crear tablas, listas, enlaces y secciones lógicas de una página. En esta lección, hemos examinado con más detalle los párrafos y la importancia del marcado para mostrar correctamente la información en una página.
