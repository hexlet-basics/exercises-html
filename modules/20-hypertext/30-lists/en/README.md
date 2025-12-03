
Lists are one way of presenting content on a page. With their help it is easy to group small related fragments, such as a shopping list:

```text
— Milk
— Bread
— Water
```

You can make such a list with three paragraphs, but then, at first glance, it will seem that these are three different phrases not united by a common meaning.

![](../assets/paragraphs.png)

Lists are used to properly relate this information. To create them in HTML, several tags are used, nested within each other:

* `<ul>` or `<ol>` to define the type of list
* `<li>` to create a list item

The general layout is as follows:

```text
<List_type>
  <list_item>Text</list_item>
</list_item>
```

## Marked list

The `<ul>` tag is used to create a bulleted list.

Bulleted lists are used when the information does not require a specific sequence. For example, the grocery list from the example above. It is not so important what will be bought first: milk or bread, it is important to buy all the products.

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Water</li>
</ul>
```

![](../assets/ul.png)


## Numbered list

**Numbered** lists are used to group sequential information, an important feature of which is the presence of a serial number of the item.

Such lists are useful if they indicate the sequence of actions to be taken. A numbered list is created with the `<ol>` tag, inside which also lie elements in the `<li>` tags.

To-do list for the day

![](../assets/ol.png)

in HTML markup looks like this:

```html
<ol>
  <li>Buy food</li>
  <li>Go to Alex</li>
  <li>Cook dinner</li>
</ol>
```
