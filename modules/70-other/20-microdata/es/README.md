Hablando de semántica, se mencionó un formato de marcado llamado microformato, utilizado por los robots de búsqueda para analizar la información en una página. Un marcado adecuado de la página con microformato ayuda a mostrar en los resultados de búsqueda no solo el enlace al sitio web y la descripción, sino también información adicional:

* Nombre de la organización
* Horario de atención
* Dirección
* Número de teléfono

El microformato es una herramienta que se implementa mediante atributos adicionales en las etiquetas HTML.

## Schema.org

Los desarrolladores han creado varios tipos de microformatos, siendo el más común _Schema.org_, que ofrece una amplia selección de "vocabularios" para describir la información en una página.

Un vocabulario es un conjunto de reglas que describen los bloques en una página. Sesiones de películas en un cine, información del departamento de ventas, precios de productos, reseñas de artículos, todo esto se presenta en pequeños vocabularios.

Pasos para crear un microformato:

* Selecciona un vocabulario. Puedes consultar la documentación para conocer los vocabularios compatibles con un motor de búsqueda en particular. Para el motor de búsqueda Yandex, los vocabularios disponibles se indican [aquí](https://es.wikipedia.org/wiki/Schema.org).
* Define el bloque que se va a marcar. Puede ser un bloque o incluso toda la página del sitio web.
* Identifica la información relevante. En el caso de marcar información de contacto, esto incluye el nombre de la organización, el teléfono, el correo electrónico y la dirección.
* Especifica los atributos según el tipo de información y el vocabulario seleccionado.

No es posible proporcionar instrucciones completas sobre el microformato en una sola lección. Es un tema amplio con muchos matices diferentes. A medida que adquieras experiencia, aprenderás a identificar rápidamente la información necesaria y marcarla correctamente. Con un enfoque sencillo, el microformato ofrece grandes oportunidades tanto en términos de presentación visual de la información en los resultados de búsqueda como para la promoción en motores de búsqueda.

## Microformato de contacto

Tomemos como ejemplo los datos de contacto de una empresa ficticia llamada "Proud" y marquemos los contactos utilizando _Schema.org_. Inicialmente, el bloque de contactos se ve así:

```html
<section>
  <h1>Empresa "Proud"</h1>
  <p>Dirección: Motino, Calle de los Constructores, Número 6</p>
  <p>Teléfono: 8 (8765) 333-00-00</p>
  <p>Email: info@proud-company.test</p>
</section>
```

Primero, debemos seleccionar un vocabulario. Yandex ofrece varias opciones para esto. Utilizaremos el vocabulario "Organization". Puedes encontrar una descripción completa de este vocabulario en el sitio web [https://schema.org/](https://schema.org/).

---

El objetivo de la lección no es enseñar cómo marcar completamente los datos. El objetivo de la lección es mostrar un ejemplo de microformato.

---

Para indicar al motor de búsqueda que los datos están marcados con un vocabulario, se deben especificar dos atributos:

* `itemscope` - indica que el bloque es una entidad única y que los datos dentro de él están relacionados. Solo se especifica en el bloque principal y no tiene un valor propio.
* `itemtype` - indica qué vocabulario se utilizará. Por ejemplo, para describir los contactos, se selecciona el vocabulario **Organization**. El atributo completo se ve así: `itemtype="http://schema.org/Organization"`

```html
<section itemscope itemtype="http://schema.org/Organization">
  <h1>Empresa "Proud"</h1>
  <p>Dirección: Motino, Calle de los Constructores, Número 6</p>
  <p>Teléfono: 8 (8765) 333-00-00</p>
  <p>Email: info@proud-company.test</p>
</section>
```

Ahora el motor de búsqueda sabrá que la información dentro de este bloque se refiere a una organización. Pasemos a marcar la dirección. _Schema.org_ permite especificar la calle, el número, el edificio, etc., por separado, pero en este caso generalizaremos y utilizaremos solo un valor `itemprop="address"` para indicar la dirección de la empresa. Ten en cuenta que los elementos de marcado se especifican utilizando el atributo **itemprop**.

```html
<section itemscope itemtype="http://schema.org/Organization">
  <h1>Empresa "Proud"</h1>
  <p>Dirección: <span itemprop="address">Motino, Calle de los Constructores, Número 6</span></p>
  <p>Teléfono: 8 (8765) 333-00-00</p>
  <p>Email: info@proud-company.test</p>
</section>
```

Siguiendo el mismo patrón, marquemos el resto de los datos: nombre, teléfono, correo electrónico. Cada uno de ellos tiene su propio valor para el atributo **itemprop**. Ten en cuenta que solo se marcan los datos, dejando fuera el nombre del campo. Para esto, los datos relevantes se envuelven en ``<span>`` y se les asigna el atributo correspondiente.

```html
<section itemscope itemtype="http://schema.org/Organization">
  <h1 itemprop="name">Empresa "Proud"</h1>
  <p>Dirección: <span itemprop="address">Motino, Calle de los Constructores, Número 6</span></p>
  <p>Teléfono: <span itemprop="telephone">8 (8765) 333-00-00</span></p>
  <p>Email: <span itemprop="email">info@proud-company.test</span></p>
</section>
```

Puede utilizar las herramientas de las principales plataformas de búsqueda para verificar la corrección del microformato:

* [Google](https://search.google.com/test/rich-results)
* [Yandex](https://webmaster.yandex.ru/tools/microtest/)

Intente insertar el ejemplo de prueba en estas herramientas y observe los resultados. También puede intentar "romper" el microformato y ver los errores que se muestran.
