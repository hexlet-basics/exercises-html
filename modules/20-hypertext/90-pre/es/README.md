A veces surge la necesidad de insertar texto manteniendo su formato original. Observemos la famosa "escalera de Mayakovsky" del poema "A Sergey Yesenin".

<div class="hexlet-basics-example">
    <pre>
    Ustedes se han ido,
            como se dice,
                          al mundo de lo desconocido.
    Vacío...
            Vuelan,
                  estrellándose contra las estrellas.
    Ni un adelanto para ti,
                  ni una cerveza.
    Sobriedad.
    </pre>
</div>


Vladimir Mayakovsky creía que este formato era el mejor para resaltar el ritmo del poema.

Dar formato a este texto utilizando caracteres especiales en HTML es muy complicado. Tendrías que "jugar" con caracteres de espacio en blanco. Esto haría que el mantenimiento de este tipo de marcado sea muy difícil en el futuro:

```html
<p>Ustedes se han ido,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;como se dice,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;al mundo de lo desconocido.</p>
```

Para solucionar este problema, existe una etiqueta especial `<pre>`, cuya función es mostrar el texto que contiene mientras conserva todos los caracteres de espacio en blanco. Por defecto, la etiqueta `<pre>` muestra el texto con una fuente monoespaciada, en la que todos los caracteres tienen la misma anchura, a diferencia de las fuentes regulares.

```html
<pre>
Ustedes se han ido,
        como se dice,
                      al mundo de lo desconocido.
Vacío...
        Vuelan,
              estrellándose contra las estrellas.
Ni un adelanto para ti,
              ni una cerveza.
Sobriedad.
</pre>
```

Dentro de la etiqueta `pre`, se pueden utilizar etiquetas de formato de texto como `<i>`, `<em>`, `<b>`, `<strong>`.
