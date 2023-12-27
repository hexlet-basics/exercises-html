В различных формах пользователю часто приходится выбирать один из множества вариантов. Это могут быть категории, по которым мы хотим произвести поиск, выбор различных опций для поиска. Наиболее распространённым решением является использование выпадающих списков:

<div class="hexlet-basics-example my-3">
  <p class="lead">В какой категории искать?</p>
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
</div>

Для создания такого выпадающего списка используется тег `<select>` с вложенными внутри него тегами `<option>`. Всё это похоже на создание обычных списков, где вместо `ul/ol` используется `<select>`, а вместо `<li>` используется `<option>`.

Часто первый пункт списка используется для заголовка всего выпадающего списка. В таком случае для него используют атрибут `disabled`, чтобы заблокировать его для выбора.

```html
<form>
  <select>
    <option disabled>Какой курс вы хотите пройти?</option>
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```

<div class="hexlet-basics-example my-3">
  <form>
    <select class="form-select">
      <option disabled>Какой курс вы хотите пройти?</option>
      <option>JS</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Racket</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </form>
</div>

Список внутри формы также может быть представлен в виде списка, в котором можно выбрать несколько элементов. Делается это с помощью зажатия кнопки `ctrl` и клика мышки по полям, которые мы хотим выбрать.

<div class="hexlet-basics-example my-3">
  <p class="lead">В какой категории искать?</p>
  <form>
    <select multiple class="form-select">
      <option>JS</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Racket</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </form>
</div>

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
