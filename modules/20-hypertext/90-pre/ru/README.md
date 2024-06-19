
Иногда возникает потребность вставить текст, сохраняя его оригинальное форматирование. Взглянем на знаменитую «лесенку Маяковского» из стихотворения «Сергею Есенину».

<div class="hexlet-basics-example">
    <pre>
    Вы ушли,
            как говорится,
                          в мир в иной.
    Пустота...
            Летите,
                  в звезды врезываясь.
    Ни тебе аванса,
                  ни пивной.
    Трезвость.
    </pre>
</div>


Владимир Маяковский считал, что именно в таком виде лучше всего оформляется ритм стиха.

Оформить такой текст с помощью спецсимволов в HTML очень сложно. Придётся «жонглировать» пробельными спецсимволами. Из-за этого такую разметку будет очень сложно поддерживать в будущем:

```html
<p>Вы ушли,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;как говорится,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;в мир в иной.</p>
```

Для решения этой проблемы существует специальный тег `<pre>`, задача которого — вывести текст внутри себя с сохранением всех пробельных символов. По умолчанию тег `<pre>` выводит текст моноширинным шрифтом, в котором все символы имеют одинаковую ширину, в отличие от обычных шрифтов.

```html
<pre>
Вы ушли,
        как говорится,
                      в мир в иной.
Пустота...
        Летите,
              в звезды врезываясь.
Ни тебе аванса,
              ни пивной.
Трезвость.
</pre>
```

Внутри тега `pre` можно использовать теги для оформления текста: `<i>`, `<em>`, `<b>`, `<strong>`.