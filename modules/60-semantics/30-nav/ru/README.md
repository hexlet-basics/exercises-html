Вернёмся к примеру из прошлых уроков:

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Логотип"> <!-- Логотип сайта -->
  <div id="menu"> <!-- Меню -->
    <ul>
      <li><a href="/">Главная</a></li>
      <li><a href="/about">О нас</a></li>
      <li><a href="/contacts">Контакты</a></li>
    </ul>
  </div>
</header>
```

В нём меню сайта размечено с помощью обычного тега `<div>` с идентификатором `menu`. Как известно, такое обозначение работает для разработчиков, но не для браузеров. Они не понимают, что это меню, а не просто обёртка для списка.

Для создания полноценного меню используется парный тег `<nav>`, задача которого — разметить область страницы с основным меню. Также различные устройства для чтения с экрана, которыми пользуются люди со слабым зрением, используют этот тег, чтобы определить, стоит ли его отображать на странице.

Заменим `<div id="menu"></div>` на изученный тег `<nav>`:

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Логотип"> <!-- Логотип сайта -->
  <nav> <!-- Меню -->
    <ul>
      <li><a href="/">Главная</a></li>
      <li><a href="/about">О нас</a></li>
      <li><a href="/contacts">Контакты</a></li>
    </ul>
  </nav>
</header>
```

Элемент `nav`, как и `header` не является уникальным для страницы. Его можно использовать для любого меню на странице, но есть несколько рекомендаций:

1. Нет необходимости оборачивать каждое меню в элемент `nav`. В основном такой областью указываются только основные меню. Дополнительные, такие как меню в футере, не оборачивают в тег `<nav>`, хотя это не запрещено.
2. Хороший пример дополнительного использования `nav` — навигация по текущей странице.
3. `nav` может содержать не только ссылки, но также и текст, в котором есть ссылки. Ориентируйтесь на здравый смысл. Если навигация является основной для страницы или всего сайта, то оберните её в тег `<nav>`.
