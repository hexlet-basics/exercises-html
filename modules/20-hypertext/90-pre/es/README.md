A veces surge la necesidad de insertar texto manteniendo su formato original. Observemos la famosa "escalera de Mayakovsky" del poema "A Sergey Yesenin".

![](../assets/ladder.png)

Vladimir Mayakovsky creía que este formato era el mejor para resaltar el ritmo del poema.

Dar formato a este texto utilizando caracteres especiales en HTML es muy complicado. Tendrías que "jugar" con caracteres de espacio en blanco. Esto haría que el mantenimiento de este tipo de marcado sea muy difícil en el futuro:

```html
<p>As the saying says,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you are</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;now far.</p>
```

Para solucionar este problema, existe una etiqueta especial `<pre>`, cuya función es mostrar el texto que contiene mientras conserva todos los caracteres de espacio en blanco. Por defecto, la etiqueta `<pre>` muestra el texto con una fuente monoespaciada, en la que todos los caracteres tienen la misma anchura, a diferencia de las fuentes regulares.

```html
<pre>
As the saying says,
              you are
                    now far.
Void and stars,
        a stodgy kind
                    passover.
Not a payday,
            not a whiskey bar.
Sober.
</pre>
```

Dentro de la etiqueta `pre`, se pueden utilizar etiquetas de formato de texto como `<i>`, `<em>`, `<b>`, `<strong>`.
