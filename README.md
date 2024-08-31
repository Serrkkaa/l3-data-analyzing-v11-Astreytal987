[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sDPidT2Z)
# Требования

* Нельзя менять уже написанный код, тесты и другие файлы добавленные в проект
* Помимо стандартной библиотеки, вы можете использовать все что импортировано. Что не импортировано, то не используется.
* Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть какие из тестов сработают, а какие нет.
* Во время работы не забывайте запускать саму утилиту и npm test

# Задание

Ваша задача написать консольную утилиту, которая принимает данные из прочитанного файла с информацией о языках и выводит на экран некоторую статистику по данным из файла. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:

```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17
Continents: Европа, Америка, Африка, Азия
Amount of languages with 1 country: 4
The most popular language: Английский
Complexity: Средняя: 8, Низкая: 3, Высокая: 6
```

Вывод содержит фиксированный набор строк (Count, Continents, ...), каждая из которых соответствует какой-то агрегированной информации по данным из файла. Например, первая строка содержит количество записей в переданном файле. Значения в этих строках зависят от данных внутри переданного файла. В примере выше число 17, в вашем случае может быть другое, зависит от того, с каким файлом ведется работа.

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:

## 1 шаг

Выведите количество записей с данными в переданном файле. Учтите, что первая строчка в CSV файле является заголовочной, она не содержит данных и не должна учитываться. Вывод утилиты будет таким:

```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17
```

## 2 шаг

Выведите список континентов, в которых используются языки из переданного файла. Обратите внимание, что здесь нужно вывести только уникальные значения без дублей.


```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17 # Не забывайте, что предыдущее решение остается работать
Continents: Европа, Америка, Африка, Азия
```

## 3 шаг

Выведите количество языков из переданного файла, которые используются только в одной стране.

```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17
Continents: Европа, Америка, Африка, Азия
Amount of languages with 1 country: 4
```

## 4 шаг

Выведите самый популярный язык из предложенных, на основе информации о количестве носителей.

```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17
Continents: Европа, Америка, Африка, Азия
Amount of languages with 1 country: 4
The most popular language: Английский
```

## 5 шаг

Выведите все уровни сложности изучения языка и количество его нахождений в файле. Например, если сложность "Средняя" встречается 3 раза, то вывод будет "Средняя":3.

Обратите внимание, что вы получаете объект, в котором ключи - это уровни сложности, а значение - количество нахождений. В консоль вы должны вывести строку, соответственно, полученный объект представьте в виде строки.

```bash
bin/languages.js __fixtures__/languages1.csv
Count: 17
Continents: Европа, Америка, Африка, Азия
Amount of languages with 1 country: 4
The most popular language: Английский
Complexity: Низкая: 3, Средняя: 8, Высокая: 6
```

# Список доступных сайтов

- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [Hexlet](https://hexlet.io)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classrom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)

# Примечание

При возникновении проблем с линтером на определенной строке, вы можете отключить линтер для этой строки, написав выше:
```bash
// eslint-disable-next-line
```
