Al escribir blogs educativos sobre programación o artículos, a menudo es necesario mostrar fragmentos de código. En cada lección de Code Basics, hay bloques de código similares a este:

```html
<p>Este es un ejemplo de código</p>
```

Para crear un bloque de código se utiliza la etiqueta `<code>`, dentro de la cual se coloca el código en cualquier lenguaje de programación.

```javascript
// Ejemplo de código en JavaScript
const square = (num) => {
  return num * num;
};
```

A menudo se utiliza la etiqueta `<code>` junto con la etiqueta `<pre>` para preservar el formato. Si no se utiliza la etiqueta `<pre>`, es necesario controlar los saltos de línea manualmente, por ejemplo, envolviendo cada línea con la etiqueta `<p>`.

Es importante tener en cuenta que todas las etiquetas dentro de `<code>` serán interpretadas por el navegador, por lo que se utilizan caracteres especiales dentro de él. Otra solución común es envolver el nombre de la etiqueta con una etiqueta adicional, como `<span>`:

```html
<code>
  &lt;<span>p</span>&gt;Insertamos la etiqueta p como texto plano &lt;<span>/p</span>&gt;
</code>
```
