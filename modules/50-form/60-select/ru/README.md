В различных формах пользователю часто приходится выбирать один из множества вариантов. Это могут быть категории, по которым мы хотим произвести поиск, выбор различных опций для поиска. Наиболее распространённым решением является использование выпадающих списков:

```html
<p class="lead">Choose a category to search</p>
<form>
  <select class="form-select">
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```

![](../assets/select.png)

Для создания такого выпадающего списка используется тег `<select>` с вложенными внутри него тегами `<option>`. Всё это похоже на создание обычных списков, где вместо `ul/ol` используется `<select>`, а вместо `<li>` используется `<option>`.

Часто первый пункт списка используется для заголовка всего выпадающего списка. В таком случае для него используют атрибут `disabled`, чтобы заблокировать его для выбора.

```html
<form>
  <select>
    <option disabled>What course do you want to take?</option>
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```

![](../assets/with-disabled.png)

Список внутри формы также может быть представлен в виде списка, в котором можно выбрать несколько элементов. Делается это с помощью зажатия кнопки `ctrl` и клика мышки по полям, которые мы хотим выбрать.

![](../assets/multiple.png)

Для того, чтобы создать список с множественным выбором, у тега `<select>` добавляется атрибут `multiple`

```html
<form>
  <select multiple>
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```
