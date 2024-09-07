# Модуль лайков

Готовый модуль лайков/дизлайков.

https://codepen.io/shelamov/pen/GRbPYRr

## Логика работы

### Состояние - нечего изначально не активировано

При нажатии на лайк/дизлайк, его значение увеличивается

### Состояние - Пользователь передумал или ошибся и нажал повторно на противоположный лайк/дизлайк

Элемент ао которому был произведен клик увеличивается, а тот на который был сделан клик ранее - уменьшается

### Состояние - Пользователь передумал ставить лайки

При повторном нажатии на активный лайк он сбрасывается в изначальное состояние

## Управление

Для установки уже активного лайка установить селектор `active` нужному элементу.

```html
<div class="dlp-likes__item dlp-likes__item_minus active">...</div>
```

```html
<div class="dlp-likes__item dlp-likes__item_plus active">...</div>
```

===============================================================================

# likes module

Ready-made like/dislike module.

## The logic of the work

### ### Status - nothing is initially activated

When you click on a like/dislike, its value increases

### Status - The user changed his mind or made a mistake and clicked again on the opposite like/dislike

The element that was clicked on increases, and the one that was clicked on earlier decreases

### Status - The user has changed his mind about putting likes

When you click on the active like again, it resets to its original state

## Control

To set an additional like, set the `active` selector for the user.

```html
<div class="dlp-likes__item dlp-likes__item_minus active">...</div>
```

```html
<div class="dlp-likes__item dlp-likes__item_plus active">...</div>
```
