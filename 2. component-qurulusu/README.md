# React Dərsləri

Bu repository React öyrənərkən etdiyim dərsləri və nümunələri saxlayır.

## 2. Component

React-də component anlayışı.
Component-lərin yaradılması və istifadə olunması.

## Component nədir?

Component – istifadəçi interfeysinin (UI) təkrar istifadə oluna bilən hissəsidir.

React-də tətbiq müxtəlif komponentlərdən qurulur. Hər bir komponent səhifənin müəyyən bir hissəsini idarə edir.

Məsələn **App.jsx** əsas komponentdir və onun daxilində başqa komponentlər yaradıla bilər.

Nümunə:

- Login.jsx
- Header.jsx
- Footer.jsx

Bu komponentlər App komponentinin daxilində istifadə edilə bilər.

## React-da baş verə biləcək xətalar

React komponentində `return` daxilində yalnız **bir parent element** olmalıdır.

Yanlış nümunə:

```jsx
return (
  <div>Xəta</div>
  <div>Xəta</div>
);
```

Bu halda React xəta verir, çünki `return` daxilində iki ayrı element var.

Bu problemi həll etmək üçün elementləri **parent div** və ya **Fragment** içində yazmaq lazımdır.

Doğru nümunə (Fragment ilə):

```jsx
return (
  <>
    <div>Xəta</div>
    <div>Xəta</div>
  </>
);
```

-Fragment <> </>

## Texnologiyalar

- React
- Vite
- JavaScript
