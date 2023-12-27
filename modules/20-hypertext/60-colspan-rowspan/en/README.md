
Tables often need to merge rows or columns. It helps to combine different information. For example, if there is no product in the stock table, there is no point in constantly duplicating information - it can be merged, and you can write that the product is out of stock:

<div class="hexlet-basics-example my-3">
  <table class="table-bordered m-0">
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tea</td>
        <td colspan="2">Out of stock</td>
      </tr>
    </tbody>
  </table>
</div>

With HTML, you can combine cells in columns or rows by using the special attributes `colspan` and `rowspan`. Their values are the number of cells to be merged with the current one, either to the right (for `colspan`) or down (for `rowspan`) Counting for the number of cells starts from the current cell that the property has been applied to. For example, if the value is `colspan="2"`, the current cell will be merged with the neighboring one.

The layout for the example above, without combining cells, is as follows:

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Amount</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Tea</td>
      <td>Out of stock</td> <!-- the cell we want to combine -->
      <td></td>
    </tr>
  </tbody>
</table>
```

In order to merge cells, you need to do two things:
1. Once you've chosen a cell to be merged and added the tags, add the `colspan` attribute with a value equal to the number of cells to be merged to the right
2. Remove unnecessary cells from the row

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Amount</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Tea</td>
      <td colspan="2">Out of stock</td>
    </tr>
  </tbody>
</table>
```

The `rowspan` attribute is used to combine cells vertically. The algorithm is the same as the with horizontal merging. The only difference is that you have to delete cells in neighboring rows:

```html
<table>
  <thead>
    <tr>
      <th>Employee</th>
      <th>Salary</th>
      <th>Bonus</th>
      <th>Manager</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alex Primadonin</td>
      <td>750$</td>
      <td>63$</td>
      <td rowspan="2">Cody Hexly</td>
    </tr>
    <tr>
      <td>Eddie Vainy</td>
      <td>1200$</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
```

In this example, there are two employees interacting with one manager. You can specify it twice, but it's clearer if you merge the cells vertically. To do this, the attribute `rowspan="2"` was added, and in the second row the fourth cell was removed, because its place will be taken by the cell above.

<div class="hexlet-basics-example my-3">
  <table class="table-bordered m-0">
    <thead>
      <tr>
        <th>Employee</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Manager</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Alex Primadonin</td>
        <td>750$</td>
        <td>63$</td>
        <td rowspan="2">Cody Hexly</td>
      </tr>
      <tr>
        <td>Eddie Vainy</td>
        <td>1200$</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>
</div>
