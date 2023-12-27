
A menudo es necesario unir filas o columnas en tablas. Esto ayuda a combinar información diversa. Por ejemplo, si un producto no está disponible en una tabla de inventario, no tiene sentido duplicar constantemente la información, se puede unir y escribir que el producto no está en el inventario:

<div class="hexlet-basics-example my-3">
  <table class="table-bordered m-0">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Té</td>
        <td colspan="2">No disponible en el inventario</td>
      </tr>
    </tbody>
  </table>
</div>

En HTML, se pueden unir celdas en columnas o filas utilizando los atributos especiales `colspan` y `rowspan`. Sus valores son la cantidad de celdas a la derecha (para `colspan`) o debajo (para `rowspan`) que se deben unir con la celda actual. La cuenta comienza desde la celda actual a la que se aplica la propiedad. Por ejemplo, si se establece el valor `colspan="2"`, la celda actual se unirá con la celda adyacente.

La marcación para el ejemplo anterior sin tener en cuenta la unión de celdas sería la siguiente:

```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Cantidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Té</td>
      <td>No disponible en el inventario</td> <!-- celda que queremos unir -->
      <td></td>
    </tr>
  </tbody>
</table>
```

Para unir celdas, debes realizar dos acciones:
1. Agregar el atributo `colspan` con el valor igual a la cantidad de celdas a la derecha que se van a unir a la etiqueta de la celda que se va a unir.
2. Eliminar las celdas adicionales de la fila.

```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Cantidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Té</td>
      <td colspan="2">No disponible en el inventario</td>
    </tr>
  </tbody>
</table>
```

Para unir celdas verticalmente, se utiliza el atributo `rowspan`. El algoritmo de acciones es similar al de la unión horizontal. La única diferencia es que se deben eliminar las celdas en las filas adyacentes:

```html
<table>
  <thead>
    <tr>
      <th>Empleado</th>
      <th>Salario</th>
      <th>Bonificaciones</th>
      <th>Gerente</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alex Hernández</td>
      <td>750$</td>
      <td>63$</td>
      <td rowspan="2">Luis Castillo</td>
    </tr>
    <tr>
      <td>Víctor López</td>
      <td>1200$</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
```

En el ejemplo, dos empleados interactúan con un mismo gerente. Se podría indicar su nombre dos veces, pero es más claro unir las celdas verticalmente. Para ello, se agregó el atributo `rowspan="2"`, y en la segunda fila se eliminó la cuarta celda, ya que será ocupada por la celda de arriba.

<div class="hexlet-basics-example my-3">
  <table class="table-bordered m-0">
    <thead>
      <tr>
        <th>Empleado</th>
        <th>Salario</th>
        <th>Bonificaciones</th>
        <th>Gerente</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Alex Hernández</td>
        <td>750$</td>
        <td>63$</td>
        <td rowspan="2">Luis Castillo</td>
      </tr>
      <tr>
        <td>Víctor López</td>
        <td>1200$</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</div>
